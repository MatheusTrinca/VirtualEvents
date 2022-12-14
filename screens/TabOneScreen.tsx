import { Alert, Pressable, StyleSheet } from 'react-native';
import { Agenda, AgendaEntry } from 'react-native-calendars';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import events from '../assets/data/events.json';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <Pressable
        style={[styles.item, { height: reservation.height }]}
        onPress={() => navigation.navigate('Modal', { id: reservation.id })}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={events}
        renderItem={renderItem}
        selected={'2022-11-25'}
        renderEmptyDate={renderEmptyDate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
  },
});
