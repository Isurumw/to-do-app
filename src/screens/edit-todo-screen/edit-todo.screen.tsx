import React, {useEffect, useState} from 'react';
import {
  Platform,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  SafeAreaView,
} from 'react-native';
import {useNavigation, RouteProp, useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

import {useDispatch, useSelector} from 'react-redux';
import {
  onDeleteTodo,
  onFetchTodo,
  onSaveTodo,
  onResetTodos,
} from 'redux-helper/actions/todo/todo.action';
import {ApplicationState} from 'redux-helper/reducers';

import {capitalize} from 'shared-services/helper-services/helper';

import Input from 'components/input/input';
import Button from 'components/custom-button/button';

import DeleteIcon from 'assets/images/svg/delete.svg';

import {foundation} from 'styles/colors';
import styles from './edit-todo.styles';

const EditTodoScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {didDelete, savedTodo, loadingState} = useSelector(
    (state: ApplicationState) => state.todoReducer,
  );

  const route = useRoute<RouteProp<EditTodoParams, 'params'>>();
  let todo: Todo | undefined = route?.params?.todo;
  const catagories = ['home', 'school', 'personal', 'work'];

  const [description, setDescription] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<string>('');

  const [catagory, setCatagory] = useState<string>(catagories[0]);

  useEffect(() => {
    if (todo) {
      setDescription(todo.fields.description?.stringValue ?? '');
      setCatagory(todo.fields.category.stringValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: todo ? 'Edit Todo' : 'Add Todo',
      headerRight: () =>
        todo ? (
          <TouchableOpacity
            style={styles.btnBin}
            onPress={actionDelete}
            disabled={loadingState !== 'none'}
            testID="shareTest">
            <DeleteIcon style={styles.imgBin} fill={foundation.watermelon} />
          </TouchableOpacity>
        ) : null,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (didDelete || savedTodo) {
      dispatch(onFetchTodo());
      dispatch(onResetTodos());
      navigation.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [didDelete, savedTodo]);

  const actionDelete = () => {
    Alert.alert(
      'Alert',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Okay', onPress: deleteItem},
      ],
      {cancelable: false},
    );
  };

  const deleteItem = () => {
    dispatch(onDeleteTodo(todo!.name));
  };

  const actionSave = () => {
    dispatch(onSaveTodo(catagory, description, todo?.name));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 72 : 0}>
          <View>
            <Text style={styles.txtCategory}>Category</Text>
            <Picker
              style={styles.itemPicker}
              selectedValue={catagory}
              onValueChange={(value, _index) => setCatagory(value)}>
              {catagories.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={capitalize(item)}
                  value={item}
                />
              ))}
            </Picker>
            <Input
              contentStyle={styles.inputDescription}
              label="Description"
              type="form"
              error={descriptionError}
              inputProps={{
                defaultValue: description,
                keyboardAppearance: 'dark',
                placeholder: 'Enter your todo discription',
                autoCorrect: false,
                returnKeyType: 'done',
                onChangeText: (text: string) => setDescription(text.trim()),
                onTextInput: () => setDescriptionError(''),
                editable: loadingState === 'none',
                autoCapitalize: 'none',
              }}
            />
          </View>
          <Button
            label={todo ? 'Update' : 'Save'}
            onPress={actionSave}
            containerStyle={styles.btnSave}
            disabled={description.length === 0 || loadingState !== 'none'}
            loading={loadingState === 'saving'}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditTodoScreen;
