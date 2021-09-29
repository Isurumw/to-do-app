declare type User = {
  email: {
    stringValue: string;
  };
  firstName: {
    stringValue: string;
  };
  lastName: {
    stringValue: string;
  };
  phone: {
    stringValue: string;
  };
  age: {
    integerValue: number;
  };
  image: {
    stringValue: string;
  };
  gender: {
    stringValue: string;
  };
};

declare type Todo = {
  name: string;
  fields: {
    category: {
      stringValue: string;
    };
    description: {
      stringValue: string;
    };
  };
  createTime: string;
};
