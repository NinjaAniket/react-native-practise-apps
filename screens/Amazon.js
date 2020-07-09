import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Icon,
  Right,
  Item,
  Input,
  Content,
  Card,
  CardItem,
} from 'native-base';

import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function Amazon() {
  return (
    <Container>
      <Header style={styles.header}>
        <Left style={{flexDirection: 'row'}}>
          <Icon name="md-menu" style={{color: '#fff'}} />
          <FAIcon name="amazon" style={styles.amazonLogo} />
        </Left>
        <Right>
          <Icon name="md-cart" style={styles.cartLogo} />
        </Right>
        <View style={styles.subHeader}>
          <TouchableOpacity>
            <View style={styles.searchBox}>
              <Text style={{fontSize: 12}}>Shop by</Text>
              <Text style={{fontWeight: 'bold'}}>Category</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.searchInputContainer}>
            <Item style={styles.searchItem}>
              <Icon name="search" style={styles.searchIcon} />
              <Input placeholder="search" />
            </Item>
          </View>
        </View>
      </Header>

      <Content style={styles.container}>
        <View style={styles.userinfo}>
          <Text>Hello, Aniket</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>Your Account</Text>
            <Icon name="arrow-forward" style={{fontSize: 18, marginLeft: 4}} />
          </View>
        </View>

        <Card>
          <CardItem header>
            <Text>Your Recommendation</Text>
          </CardItem>
          <CardItem>
            <View>
              <Image
                style={styles.imageStyle}
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2018/07/18/06/36/egg-net-3545650_960_720.jpg',
                }}
              />
            </View>
            <Right style={styles.recommendationRightContent}>
              <Text>Onion crispy</Text>
              <Text>Superb</Text>
            </Right>
          </CardItem>
          <CardItem>
            <View>
              <Image
                style={styles.imageStyle}
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2018/07/18/06/36/egg-net-3545650_960_720.jpg',
                }}
              />
            </View>
            <Right style={styles.recommendationRightContent}>
              <Text>Onion crispy</Text>
              <Text>Superb</Text>
            </Right>
          </CardItem>
          <CardItem>
            <View>
              <Image
                style={styles.imageStyle}
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2018/07/18/06/36/egg-net-3545650_960_720.jpg',
                }}
              />
            </View>
            <Right style={styles.recommendationRightContent}>
              <Text>Onion crispy</Text>
              <Text>Superb</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3a455c',
    height: 90,
    borderBottomColor: '#757575',
  },
  amazonLogo: {
    fontSize: 32,
    color: '#fff',
    marginHorizontal: 5,
    marginLeft: 10,
  },
  cartLogo: {
    color: '#fff',
  },
  subHeader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 90,
    height: 70,
    backgroundColor: '#3a455c',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchBox: {
    backgroundColor: '#e7e7eb',
    height: 50,
    borderRadius: 4,
    width: 100,
    padding: 10,
  },

  searchInputContainer: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    marginLeft: 3,
    backgroundColor: 4,
  },
  searchItem: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  searchIcon: {
    fontSize: 22,
    paddingTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#d5d5d6',
  },
  userinfo: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    height: 90,
    width: 90,
  },
  recommendationRightContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    height: 90,
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
});
