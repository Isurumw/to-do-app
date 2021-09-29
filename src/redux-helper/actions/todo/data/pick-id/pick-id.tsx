const pickId = (name: string) => {
  const subStrings = name.split('/');
  return subStrings[subStrings.length - 1];
};

export default pickId;
