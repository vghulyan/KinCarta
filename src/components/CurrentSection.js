import React from 'react';
import {Button, View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from '../styles';
import Section from './Section';

const CurrentSection = ({route, navigation}) => {
  const {client, vertical, is_enterprice, title, sections} = route.params;
  const renderItem = ({item}) => <Section {...item} />;
  return (
    <SafeAreaView style={{flex: 1}} testID="current-section">
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <View>
            {client && <Text style={styles.title}>{client}</Text>}
            {vertical && <Text style={styles.textStyle}>{vertical}</Text>}
            <Text style={styles.textStyle}>
              {is_enterprice ? 'Enterprise' : 'Non Enterprise'}
            </Text>
            {title && <Text style={styles.textStyle}>{title}</Text>}

            {sections && (
              <FlatList
                data={sections}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            )}
          </View>
        </View>

        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Text style={styles.footerNote}>github.com/vghulyan</Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrentSection;
