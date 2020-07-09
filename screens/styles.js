import {StyleSheet} from 'react-native';
const Base = StyleSheet.create({
  main: {
    padding: 10,
    borderRadius: 3,
  },
  label: {
    color: '#fff',
  },
  rounded: {
    borderRadius: 20,
  },
});

const Danger = StyleSheet.create({
  main: {
    backgroundColor: 'red',
  },
  label: {
    color: '#fff',
  },
});

const Info = StyleSheet.create({
  main: {
    backgroundColor: 'blue',
  },
});

const Success = StyleSheet.create({
  main: {
    backgroundColor: 'green',
  },
});

const Default = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  label: {
    color: '#333',
  },
});

export {Success, Info, Default, Danger, Base};
