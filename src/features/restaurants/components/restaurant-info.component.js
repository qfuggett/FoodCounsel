import React from "react";
import { Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export const RestaurantInfo = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://www.certifiedangusbeef.com/recipes/images/recipes/e13d03e2-0c84-4ba3-8e04-033fd00344be.jpg"
        ],
        address = "100 test street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;

    return (
        <Card elevation={5} stle={styles.card}>
            <Card.Content>
                <Title>{name}</Title>
                <Paragraph>{address}</Paragraph>
            </Card.Content>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Text>{name}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 20, backgroundColor: "white"},
});