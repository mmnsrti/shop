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
  //   import {
  //     Nearbyjobs,
  //     Popularjobs,
  //     ScreenHeaderBtn,
  //     Welcome,
  //   } from "../components";
  const Home = () => {
    const router = useRouter();
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            // headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            // headerLeft: () => <ScreenHeaderBtn dimension="60%" />,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  router.push("/");
                }}
              >
                {/* <Image
                    source={favicon}
                    style={{ width: "41px", height: "53px" }}
                    resizeMode="cover"
                  /> */}
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
  