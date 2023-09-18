import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.eventName}>React nativee</Text>

        <TextInput 
        placeholder='Nome do participant'
        placeholderTextColor="#6b6b6b"
        style={styles.input} />

    </View>
    
    </>

  );
}