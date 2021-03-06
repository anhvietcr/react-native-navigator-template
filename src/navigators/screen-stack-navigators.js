import React, { Component } from "react"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "../screens/HomeScreen"
import SettingsScreen from "../screens/SettingsScreen"
import ProfileScreen from "../screens/ProfileScreen"
import SearchScreen from "../screens/SearchScreen"

export const HomeNavigator = createStackNavigator({
    Home: { screen: HomeScreen }
})

export const SettingsNavigator = createStackNavigator({
    Settings: { screen: SettingsScreen }
})

export const ProfileNavigator = createStackNavigator({
    Profile: { screen: ProfileScreen }
})

export const SearchNavigator = createStackNavigator({
    Search: { screen: SearchScreen }
})