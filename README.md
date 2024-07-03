# rn-assignment6-11014393

# React Native Assignment 6

## Overview

This is an assignment for the DCIT202 Mobile Application Development course. The objective is to recreate a UI mockup and implement functionality for a simple shopping cart application using React Native. The application includes a list of products, an option to add products to the cart, and a cart screen to view and remove selected items. Local storage is used to persist cart data.

## Features

- **HomeScreen**: Displays a list of available products with an option to add them to the cart.
- **CartScreen**: Displays the selected items in the cart with an option to remove them.
- **Local Storage**: Uses `AsyncStorage` to store selected items locally on the device.

## Design Choices

- **State Management**: Used React's `useState` and `useEffect` hooks for managing state within components.
- **Navigation**: Used `react-navigation` to handle navigation between the HomeScreen and CartScreen.
- **Local Storage**: Used `AsyncStorage` for storing and retrieving cart data, ensuring persistence across app restarts.
- **Component-based Architecture**: Followed a modular approach by creating separate components for different screens and functionalities.

## Implementation Details

### HomeScreen

- Displays a list of products with an "Add to Cart" button for each product.
- Fetches and renders products from a static list or a mock API.
- Adds selected products to the cart and stores them using `AsyncStorage`.

### CartScreen

- Displays the items added to the cart with a "Remove from Cart" button for each item.
- Fetches and renders cart items from `AsyncStorage`.
- Removes items from the cart and updates the local storage.

### Local Storage

- Used `AsyncStorage` to store and retrieve the cart data.
- Persisted cart items across app restarts by saving the data whenever items are added or removed.

## Screenshots

### Home Screen

![Home Screen](../rn-assignment6-11014393/Assignment6/assets/Screenshot_202.jpg)

### Cart Screen

![Cart Screen](../rn-assignment6-11014393/Assignment6/assets/Screenshot_2.jpg)

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/rn-assignment6-ID.git
cd rn-assignment6-ID
```
