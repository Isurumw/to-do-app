import React from 'react';
import {ScrollView} from 'react-native';

import Record from '../record/record';

import EmailIcon from 'assets/images/svg/email.svg';
import PhoneIcon from 'assets/images/svg/phone.svg';
import AgeIcon from 'assets/images/svg/age.svg';
import GenderIcon from 'assets/images/svg/gender.svg';

import styles from './record-list.styles';

export interface IRecordList {
  user: User;
}

const RecordList: React.FC<IRecordList> = ({user}) => {
  return (
    <ScrollView contentContainerStyle={styles.containerScroll}>
      <Record
        Icon={EmailIcon}
        title={user?.email.stringValue ?? ''}
        containerStyle={styles.containerRecord}
      />
      <Record
        Icon={PhoneIcon}
        title={user?.phone.stringValue ?? ''}
        containerStyle={styles.containerRecord}
      />
      <Record
        Icon={AgeIcon}
        title={`${user?.age.integerValue} years`}
        containerStyle={styles.containerRecord}
      />
      <Record
        Icon={GenderIcon}
        title={user?.gender.stringValue ?? ''}
        containerStyle={styles.containerRecord}
      />
    </ScrollView>
  );
};

export default RecordList;
