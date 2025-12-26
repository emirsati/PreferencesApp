import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}>
      <Text style={{ color: theme === 'light' ? '#000' : '#fff', fontSize: 20, marginBottom: 20 }}>
        Current Theme: {theme}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});