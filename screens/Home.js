import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import{
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { COLORS, icons, SIZES, FONTS, images } from "../constants";


const Home = ({navigation}) => {

        // na chama wklepane dane essa:

        const initialCurrentLocation = {
            streetName: "TfujStaryPijanyESSSSS",
            // gps: {
            //     latitude: 1.5496614931250685,
            //     longitude: 110.36381866919922
            // }
        }
    
        const categoryData = [
            {
                id: 1,
                name: "Wszystkie", 
            },
            {
                id: 2,
                name: "Polska", 
            },
            {
                id: 3,
                name: "Sushi", 
            },
            {
                id: 4,
                name: "Pizza", 
            },
            {
                id: 5, 
                name: "Burgery", 
            },
            {
                id: 6,
                name: "Kebab", 
            },
            {
                id: 7,
                name: "Japońska", 
            },
            {
                id: 8,
                name: "Meksykańska", 
            },
            {
                id: 9,
                name: "Makarony", 
            },
            {
                id: 10,
                name: "Zupy", 
            },
    
        ]
    
        // price rating
        const affordable = 1
        const fairPrice = 2
        const expensive = 3
    
        const restaurantData = [
            {
                id: 1,
                name: "Woda i Ogień",
                rating: 9.5,
                categories: [1, 4],
                priceRating: affordable,
                photo: images.burger_restaurant_1,
                duration: "30 - 45 min",
                location: {
                    latitude: 1.5347282806345879,
                    longitude: 110.35632207358996,
                },
                courier: {
                    avatar: images.avatar_1,
                    name: "Amy"
                },
                menu: [
                    {
                        menuId: 1,
                        name: "Cheesburger",
                        photo: images.burger_1,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 200,
                        price: 10
                    },
                    {
                        menuId: 2,
                        name: "ChickenBurger",
                        photo: images.burger_2,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 250,
                        price: 15
                    },
                    {
                        menuId: 3,
                        name: "GigaKoxBurger",
                        photo: images.burger_3,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 194,
                        price: 8
                    }
                ]
            },
            {
                id: 2,
                name: "Pizzeria Riposta",
                rating: 3.8,
                categories: [1, 4, 6],
                priceRating: expensive,
                photo: images.pizza_restaurant,
                duration: "15 - 20 min",
                location: {
                    latitude: 1.556306570595712,
                    longitude: 110.35504616746915,
                },
                courier: {
                    avatar: images.avatar_2,
                    name: "Jackson"
                },
                menu: [
                    {
                        menuId: 4,
                        name: "Da Good Pizza",
                        photo: images.pizza_1,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 250,
                        price: 15
                    },
                    {
                        menuId: 5,
                        name: "Fajna pizza",
                        photo: images.pizza_2,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 250,
                        price: 20
                    },
                    {
                        menuId: 6,
                        name: "Super fajna pizza",
                        photo: images.pizza_3,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 100,
                        price: 10
                    },
                    {
                        menuId: 7,
                        name: "Mega super fajna pizza ",
                        photo: images.pizza_4,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 100,
                        price: 10
                    }
                ]
            },
            {
                id: 3,
                name: "Ho-Na Sushi",
                rating: 4.7,
                categories: [1, 3],
                priceRating: expensive,
                photo: images.sushi_restaurant_1,
                duration: "20 - 25 min",
                location: {
                    latitude: 1.5238753474714375,
                    longitude: 110.34261833833622,
                },
                courier: {
                    avatar: images.avatar_3,
                    name: "James"
                },
                menu: [
                    {
                        menuId: 8,
                        name: "Giga box sushi",
                        photo: images.sushi,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 100,
                        price: 20
                    }
                ]
            },
            {
                id: 4,
                name: "Biesiadowo",
                rating: 4.4,
                categories: [1, 3],
                priceRating: expensive,
                photo: images.polskie_jedzenie,
                duration: "10 - 15 min",
                location: {
                    latitude: 1.5578068150528928,
                    longitude: 110.35482523764315,
                },
                courier: {
                    avatar: images.avatar_4,
                    name: "Ahmad"
                },
                menu: [
                    {
                        menuId: 9,
                        name: "Schabik",
                        photo: images.kotlet_schabowy,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 100,
                        price: 50
                    }
                ]
            },
            {
                id: 5,
                name: "Sushi Kushi",
                rating: 5.0,
                categories: [1, 2],
                priceRating: affordable,
                photo: images.sushi_restaurant_2,
                duration: "15 - 20 min",
                location: {
                    latitude: 1.558050496260768,
                    longitude: 110.34743759630511,
                },
                courier: {
                    avatar: images.avatar_4,
                    name: "Muthu"
                },
                menu: [
                    {
                        menuId: 10,
                        name: "Sushi 1",
                        photo: images.sushi_kushi_1,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 200,
                        price: 5
                    },
                    {
                        menuId: 11,
                        name: "Sushi 2",
                        photo: images.sushi_kushi_2,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 300,
                        price: 8
                    },
                    {
                        menuId: 12,
                        name: "Sushi 3",
                        photo: images.sushi_kushi_3,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 300,
                        price: 8
                    },
                    {
                        menuId: 13,
                        name: "Sushi 4",
                        photo: images.sushi_kushi_4,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 300,
                        price: 8
                    },
    
                ]
            },
            {
    
                id: 6,
                name: "Pizzeria Sjesta",
                rating: 4.9,
                categories: [1, 2, 4, 5],
                priceRating: affordable,
                photo: images.pizza_restaurant_2,
                duration: "35 - 40 min",
                location: {
                    latitude: 1.5573478487252896,
                    longitude: 110.35568783282145,
                },
                courier: {
                    avatar: images.avatar_1,
                    name: "Jessie"
                },
                menu: [
                    {
                        menuId: 12,
                        name: "Pizzzzzaaaaa 1",
                        photo: images.pizza_11,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 100,
                        price: 2
                    },
                    {
                        menuId: 13,
                        name: "Pizzzzzaaaaa 2",
                        photo: images.pizza_12,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 100,
                        price: 3
                    },
                    {
                        menuId: 14,
                        name: "Pizzzzzaaaaa 3",
                        photo: images.pizza_13,
                        description: "Lorem ipsum Lorem ipsum Lorem ipsum",
                        calories: 300,
                        price: 20
                    }
                ]
    
            }
    
    
        ]
    
        const [categories, setCategories] = React.useState(categoryData)
        const [selectedCategory, setSelectedCategory] = React.useState(null)
        const [restaurants, setRestaurants] = React.useState(restaurantData)
        const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)
    
    
        function onSelectCategory(category) {
            //filter restaurant
            let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))
    
            setRestaurants(restaurantList)
    
            setSelectedCategory(category)
        }
        // function getCategoryNameById(id) {
        //     let category = categories.filter(a => a.id == id)
        //     if(category.length > 0)
        //         return category[0].name
        //     return ""
        // }
    
        function getCategoryNameById(id) {
            let category = categories.filter(a => a.id == id)
    
            if (category.length > 0)
                return category[0].name
    
            return ""
        }



    function onSelectCategory(category){
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)
        setSelectedCategory(category)

    }


    function renderHeader(){
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style = {{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center',
                        backgroundColor: COLORS.primary,
                    }}
                >
                    { <Image
                        source={icons.list}
                        resizeMode = "contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.white,
                        }}
                    >

                    </Image> }
                    
                </TouchableOpacity>
                <View 
                    style={{
                        width:"100%",
                        height: "100%",
                        backgroundColor: COLORS.primary,
                    }}>

                    <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
                        <Text style={{ ...FONTS.h3, color:COLORS.white}}>PRZEPYSZNE.PL</Text>
                    </View>

                </View>

            </View>
        )
    }
    function renderMainCategories(){
        const renderItem = ({ item }) => {
            return(
                <TouchableOpacity
                    style = {{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding,
                        ...styles.shadow,
                    }}
                    onPress = {() => onSelectCategory(item)}
                >
                    <Text
                        style = {{
                            color: (selectedCategory?.id == item.id)? COLORS.white : COLORS.black
                        }}
                    >
                        {item.name}
                    </Text>

                </TouchableOpacity>
            )
        }
        return(
            <View>
                <FlatList
                    data = { categories }
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                    keyExtractor = { item => `${item.id}` }
                    renderItem = { renderItem }
                    contentContainerStyle = { {paddingVertical: SIZES.padding} }
            />
            </View>

        )
    }
    function RenderRestaurantList(){
        const renderItem = ({item}) => (
            <TouchableOpacity
                style = { {marginBottom: SIZES.padding} }
                onPress = {() => navigation.navigate('Restaurant',{
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style ={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source = {item.photo}
                        resizeMode = 'cover'
                        style = {{
                            width: '100%',
                            height: 200,
                            // borderRadius: SIZES.radius
                        }}
                    />
                    <View
                        style = {{
                            position: 'absolute',
                            bottom: -10,
                            right: 170,
                            height: 70,
                            width: 70,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius:SIZES.radius2,
                            borderTopLeftRadius:SIZES.radius2,
                            borderBottomLeftRadius:SIZES.radius2,
                            borderBottomRightRadius:SIZES.radius2,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        
                    </View>
                              
                </View>
                <View
                        style = {{
                            position: 'absolute',
                            backgroundColor: COLORS.white,
                            bottom: -20,
                            right: 0,
                            height: 100,
                            width: '100%',
                        }}
                    >

                    </View>

                {/* Restaurant Info here */}
                <Text style ={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style = {{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    <Image
                        source = {icons.star}
                        style = {{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text 
                        style ={{
                            ...FONTS.body3,
                            color: COLORS.primary,
                            fontWeight: 'bold'
                        }}
                    >
                        {/* Restaurant raiting */}
                        {item.rating}

                    </Text>

                    {/* Categories */}

                    <View
                        style = {{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {/* map method!!!!!!! */}
                        {
                            item.categories.map((categoryId) =>{
                              return(
                                  <View
                                    style = {{ flexDirection: 'row' }}
                                    key = {categoryId}   
                                  >
                                      <Text style = {{...FONTS.body3}}>
                                          {getCategoryNameById(categoryId)}</Text>
                                      <Text style = {{...FONTS.h3, color: COLORS.darkgray}}> . </Text>
                                  </View>
                              )  
                            })
                        }

                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        fontWeight: 'bold',
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )


        return(
            <FlatList
                data = {restaurants}
                keyExtractor = { item => `${item.id}`}
                renderItem = { renderItem }
                contentContainerStyle = {{
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 30}}
            />
        )

    }



    return(
        <SafeAreaView style = {styles.container}>
            {renderHeader()}
            {renderMainCategories()}       
            {RenderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow : {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,

    }

})

export default Home;