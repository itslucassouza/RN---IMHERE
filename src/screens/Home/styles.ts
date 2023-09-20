import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
    gap: 5,
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    color: '#fff',
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1F1E25',
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: '#ff',
    fontSize: 14,
    textAlign: 'center',
  },
})
