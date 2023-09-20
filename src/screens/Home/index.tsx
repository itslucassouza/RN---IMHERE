import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export default function Home() {
  const participants = [
    'Estudar Js',
    'Estudar Inglês',
    'sadasdasxxx',
    'sadasdas',
    'aaaaa',
    'ppppp',
    'ççççç',
    'sadasxzcz',
    'sadasxzcz sadasxzcz sadasxzcz sadasxzcz sadasxzcz sadasxzcz',
  ]

  const handleParticipantAdd = () => {
    if (participants.includes('aaaaa')) {
      return Alert.alert('Já existe', 'Já existe essa tarefa')
    }
    console.log('você clicou no botão')
  }

  function handleRemoveTodo() {
    Alert.alert('Remover', 'Remover o participante?', [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
      },
      {
        text: 'Não',
      },
    ])
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.eventName}>Tarefas</Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Nome da tarefa"
            placeholderTextColor="#6b6b6b"
            style={styles.input}
          />

          <TouchableOpacity
            onPress={handleParticipantAdd}
            style={styles.button}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant key={item} name={item} onRemove={handleRemoveTodo} />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>Sem Dados</Text>
          )}
        />
      </View>
    </>
  )
}
