import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import event from '../assets/data/event.json';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import users from '../assets/data/users.json';
import { RootStackScreenProps } from '../types';

export default function ModalScreen({ route }: RootStackScreenProps<'Modal'>) {
  const id = route?.params?.id;

  const onJoin = () => {};

  const displayedUsers = users.slice(0, 5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.time}>
        <AntDesign name="calendar" size={24} color={'black'} />{' '}
        {new Date(event.date).toDateString()}
      </Text>

      <View style={styles.footer}>
        {/* Users avatars */}
        <View style={styles.user}>
          {displayedUsers.map((user, index) => (
            <Image
              key={user.id}
              source={{ uri: user.avatarUrl }}
              style={[
                styles.userAvatar,
                { transform: [{ translateX: -15 * index }] },
              ]}
            />
          ))}
          <View
            style={[
              styles.usersAvatar,
              { transform: [{ translateX: -15 * displayedUsers.length }] },
            ]}
          >
            <Text>+{users.length - displayedUsers.length}</Text>
          </View>
        </View>
        <CustomButton text="Join the event" onPress={onJoin} />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  time: {
    fontSize: 20,
  },
  footer: {
    marginTop: 'auto',
  },

  userAvatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    margin: 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  user: {
    flexDirection: 'row',
  },
  usersAvatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    margin: 2,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
