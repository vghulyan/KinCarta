import React, {useEffect, useState} from 'react';
import {SafeAreaView, ActivityIndicator, FlatList} from 'react-native';
import styles from '../styles';
import Items from './Items';
import fetchData from '../services/fetchData';

const CaseStudies = props => {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchLatestData = async () => {
      const newData = await fetchData();
      setIsLoading(false);
      setDataSource(newData.case_studies);
    };
    fetchLatestData();
  }, []);

  const loadActivityIndicator = () =>
    isLoading ? <ActivityIndicator testID="activity-indicator" /> : null;

  const renderItem = ({item}) => <Items {...item} />;

  return (
    <SafeAreaView style={styles.container} testID="mainApp">
      {loadActivityIndicator()}

      <FlatList
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        testID="data-source"
      />
    </SafeAreaView>
  );
};

export default CaseStudies;
