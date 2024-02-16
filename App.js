import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import 'tailwindcss/tailwind.css'
import tw from 'twrnc';

// const MyComponent = () => (
//   <View style={tw`bg-blue-100`}>
//     <Text style={tw.style('text-md', invalid && 'text-red-500')}>Hello</Text>
//   </View>
// );

export default function App() {
  return (
    <View style={tw`bg-blue-100 `}>
    <Text style={tw`justify-center flex bg-red-500 items-center w-screen h-screen`}>Gramart</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

