import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

// Import Screens
import HomeMain from './Home/homeMain';
import ProductsScreen from './products';
import DetailsScreen from './Products/productDetails';
import SearchHistoryScreen from './Products/search';
import Address from './Transaction/address';
import CheckoutScreen from './Transaction/checkout';
import PaymentScreen from './Transaction/payment';
import CreditCardForm from './Transaction/addCreditCardDetails';
import DeliveryAddressScreen from './Transaction/deliveryaddress';
import MyOrders from './Products/myOrders';
import TrackingOrdersScreen from './Products/trackOrder';
import Reviews from './Products/review';
import RewardsScreen from './Products/reward';
import EditProfileScreen from './Profile/editProfile';
import ChatScreen from './Chat/chat';
import MessageList from './Chat/chatList';
import Profile from './Profile/profile';
import ComponentsScreen from './Components/component';
import HeaderScreen from './Components/headerStyle';
import Accordion from './Components/accordion';
import Alerts from './Components/alerts';
import Avatar from './Components/avatar';
import Badges from './Components/badges';
import Breadcrumb from './Components/breadcrumb';
import Buttons from './Components/buttons';
import ButtonGroup from './Components/buttonGroup';
import Cards from './Components/cards';
import Inputs from './Components/inputs';
import Dropdowns from './Components/dropdown';
import Collapse from './Components/collapse';
import RadioButton from './Components/radioButton';
import Timeline from './Components/timeline';
import Social from './Components/social';
import ListGroup from './Components/listGroup';
import Modals from './Components/modal';
import Tabs from './Components/tabs';
import Switches from './Components/switch';
import Divider from './Components/divider';
import Steppers from './Components/stepper';
import Offcanvas from './Components/offcanvas';
import Pagination from './Components/pagination';
import Placeholders from './Components/placeholder';
import Scrollspy from './Components/scrollspy';
import Spinners from './Components/spinners';
import Toasts from './Components/toasts';
import Typography from './Components/typography';
import LightGallery from './Components/lightGallery';
import Progress from './Components/progress';
import PagesScreen from './Pages/pages';
import Cart from './cart';
import SignUp from './Pages/signUp';
import SignIn from './Pages/signIn';
import WishlistScreen from './favorite';
import ForgotPassword from './Pages/forgotPassword';
import NewPasswordScreen from './Pages/newPassword';
import OPTScreen from './Pages/otp';
import NotificationScreen from './Pages/notification';
import ErrorScreen from './Pages/error404';
import FAQScreen from './Pages/faq';
import Onboarding from './Pages/onboarding';

const Stack = createStackNavigator();

const CustomHeader = () => (
  <View style={styles.header}>
    <Text style={styles.greeting}>Good Morning</Text>
    <Text style={styles.title}>Williams</Text>
  </View>
);

const HeaderRightIcons = ({handleDrawerOpen}) => (
  <View style={styles.headerRight}>
    <TouchableOpacity>
      <Image
        source={require('../assets/shop.png')}
        style={styles.cartlogo}
        resizeMode="contain"
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={handleDrawerOpen}>
      <Image
        source={require('../assets/burger.png')}
        style={styles.burgerlogo}
        resizeMode="contain"
      />
    </TouchableOpacity>
  </View>
);

const screens = [
  {name: 'Home', component: HomeMain},
  {name: 'Products', component: ProductsScreen},
  {name: 'Cart', component: Cart},
  {name: 'favourite', component: WishlistScreen},
  {name: 'details', component: DetailsScreen},
  {name: 'My Order', component: MyOrders},
  {name: 'search', component: SearchHistoryScreen},
  {name: 'address', component: Address},
  {name: 'trackOrder', component: TrackingOrdersScreen},
  {name: 'checkout', component: CheckoutScreen},
  {name: 'Transactions', component: PaymentScreen},
  {name: 'reward', component: RewardsScreen},
  {name: 'editProfile', component: EditProfileScreen},
  {name: 'Profile', component: Profile},
  {name: 'creditcardform', component: CreditCardForm},
  {name: 'deliveryAddressScreen', component: DeliveryAddressScreen},
  {name: 'review', component: Reviews},
  {name: 'signIn', component: SignIn},
  {name: 'signUp', component: SignUp},
  {name: 'forgotPassword', component: ForgotPassword},
  {name: 'OPT', component: OPTScreen},
  {name: 'newPassword', component: NewPasswordScreen},
  {name: 'notification', component: NotificationScreen},
  {name: 'error', component: ErrorScreen},
  {name: 'faq', component: FAQScreen},
  {name: 'onboarding', component: Onboarding},
  // {name: 'logout', component: Logout},

  {name: 'Chat List', component: MessageList},
  {name: 'chat', component: ChatScreen},
  {name: 'Pages', component: PagesScreen},
  {name: 'Components', component: ComponentsScreen},
  {name: 'Header Style', component: HeaderScreen},
  {name: 'Accordion', component: Accordion},
  {name: 'Alerts', component: Alerts},
  {name: 'Avatar', component: Avatar},
  {name: 'Badges', component: Badges},
  {name: 'Breadcrumb', component: Breadcrumb},
  {name: 'Buttons', component: Buttons},
  {name: 'Button Group', component: ButtonGroup},
  {name: 'Cards', component: Cards},
  {name: 'Inputs', component: Inputs},
  {name: 'Dropdowns', component: Dropdowns},
  {name: 'Collapse', component: Collapse},
  {name: 'Radio Button', component: RadioButton},
  {name: 'Timeline', component: Timeline},
  {name: 'Social', component: Social},
  {name: 'List Group', component: ListGroup},
  {name: 'Modal', component: Modals},
  {name: 'Tabs', component: Tabs},
  {name: 'Switch', component: Switches},
  {name: 'Divider', component: Divider},
  {name: 'Stepper', component: Steppers},
  {name: 'Offcanvas', component: Offcanvas},
  {name: 'Pagination', component: Pagination},
  {name: 'Placeholders', component: Placeholders},
  {name: 'Progress', component: Progress},
  {name: 'Scrollspy', component: Scrollspy},
  {name: 'Spinners', component: Spinners},
  {name: 'Toasts', component: Toasts},
  {name: 'Typography', component: Typography},
  {name: 'Lightgallery', component: LightGallery},
];

const StackNavigationScreen = ({handleDrawerOpen}) => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}>
      <Stack.Screen
        name="home"
        component={HomeMain}
        options={{
          headerTitle: CustomHeader,
          headerRight: () => (
            <HeaderRightIcons handleDrawerOpen={handleDrawerOpen} />
          ),
        }}
      />
      {screens.map(({name, component, header}) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={
            header
              ? {
                  headerTitle: CustomHeader,
                  headerRight: HeaderRightIcons,
                }
              : {headerShown: false}
          }
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigationScreen;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  greeting: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  burgerlogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginRight: 10,
  },
  cartlogo: {
    width: 40,
    height: 40,
  },
});
