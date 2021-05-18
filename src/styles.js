import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#bfbcc4',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  base: {
    width: 100,
    height: 100,
  },
  textStyle: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  footerNote: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
  headerStyle: {
    backgroundColor: '#a88074', //Set Header color
  },
  headerTitleStyle: {
    fontWeight: 'bold', //Set Header text style
  },
  leftMargin: {
    marginLeft: 10,
  },
  background: {
    backgroundColor: '#222222',
  },
});

export default styles;
