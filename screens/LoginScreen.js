import { StyleSheet, Text, View ,Image, TextInput, Button} from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    
    <View className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
    <View className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image className="mx-auto h-16 w-auto" source={require('../assets/bondap.png')} />
        <Text className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Your Projects</Text>
        <Text className="mt-2 text-center text-sm text-gray-600 max-w">
          Already added? Go to
          <Text className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"> Projects Dashboard</Text>
        </Text>
        <View className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <View className="bg-white py-8 px-6 shadow rounded-3xl sm:px-10"> 
        
          <View>
            <Text className="block text-sm font-medium text-gray-700">Project Name:</Text>
            <TextInput
              type="text"
              name="projectname"
              className="p-2 rounded-xl border mt-2 w-full"
            />
          </View>
          <View>
            <Text className="block text-sm font-medium text-gray-700">Description:</Text>
            <TextInput
              name="desci"
              
              className="p-2 rounded-xl border mt-2 w-full"
            />
          </View>
          <View>
            <Text className="block text-sm font-medium text-gray-700">Domain:</Text>
            <TextInput
              type="text"
              name="domain"
             
              className="p-2 rounded-xl border mt-2 w-full"
            />
          </View>
          <View>
            <Text className="block text-sm font-medium text-gray-700">Deadline:</Text>
            <TextInput
              type="text"
              name="deadline"
             
              className="p-2 rounded-xl border mt-2 w-full"
            />
          </View>
          <View>
            <Text className="block text-sm font-medium text-gray-700">Target:</Text>
            <TextInput
              type="text"
              name="target"
            
              className="p-2 rounded-xl border mt-2 w-full"
            />
          </View>
          <View>
            <Text className="block text-sm font-medium text-gray-700">Logo:</Text>
            <TextInput
              type="text"
              name="logo"
              
              className="p-2 rounded-xl border mt-2 w-full"
            />
          </View>
          <Button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ea580c]" title="Submit"/>
        </View>
      </View>
      </View>
</View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})