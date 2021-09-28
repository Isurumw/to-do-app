import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from 'redux-helper/reducers';
import {onFetchTodo} from 'redux-helper/actions/todo/todo.action';

import TodoItem from './components/todo-item/todo-item';
import AddIcon from 'assets/images/svg/add.svg';

import releventIcon from './data/fetch-relevent-icon';
import {formattedDate} from 'shared-services/helper-services/helper';

import {EDIT_TODO_SCREEN} from 'navigation/screen-names';

import {foundation} from 'styles/colors';
import styles from './home.styles';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {todos, loadingState} = useSelector(
    (state: ApplicationState) => state.todoReducer,
  );

  const onPressItem = (todo: Todo) => {
    navigation.navigate(EDIT_TODO_SCREEN, {
      todo: todo,
    });
  };

  const actionAddNewTodo = () => {
    navigation.navigate(EDIT_TODO_SCREEN);
  };

  const trackItem = (item: Todo) => {
    return item.name;
  };

  const renderTodoItem = ({item, index}: {item: Todo; index: number}) => (
    <>
      <TodoItem
        title={item.fields.description?.stringValue ?? 'Todo description'}
        date={formattedDate(item.createTime)}
        onPress={() => onPressItem(item)}
        Icon={releventIcon(item.fields.category.stringValue)}
        containerStyle={styles.containerItem}
        key={index}
      />
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.title}>Check your TODOS</Text>
      </View>
      <View style={styles.containerBottom}>
        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={trackItem}
          contentContainerStyle={styles.containerList}
          refreshControl={
            <RefreshControl
              refreshing={loadingState === 'fetching'}
              onRefresh={() => dispatch(onFetchTodo())}
              tintColor={foundation.grape}
              colors={[foundation.grape]}
            />
          }
        />
        <TouchableOpacity
          style={styles.btnFloatingAction}
          onPress={actionAddNewTodo}>
          <AddIcon style={styles.imgAdd} fill={foundation.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
