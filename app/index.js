import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    TouchableOpacity,
  } from "react-native";
  import { useState } from "react";
  import Welcome  from '../components/home/welcome/Welcome.js';
  import Homepage  from '../components/home/homepage/Homepage.js';
  import db from '../utils/db.json'; // Import the JSON data

  import { Stack, useRouter } from "expo-router";

  const Home = () => {
    const router = useRouter();
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  router.push("/");
                }}
              >
             
              </TouchableOpacity>
            ),
            headerTitle: "",
          }}
        />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            <Welcome handleClick={() => {}} />
            <Homepage products={db.products}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  export default Home;
  