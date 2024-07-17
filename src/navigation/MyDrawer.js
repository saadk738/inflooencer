
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileUser from '../screens/ProfileUser';
import MyTabs from './MyTabs';
import CustomDrawerContent from './CustomDrawerContent';
import Setting from '../screens/Setting';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name="MyTabs" component={MyTabs} />
            <Drawer.Screen name="Setting" component={Setting} />

        </Drawer.Navigator>
    );
}

export default MyDrawer;



// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import MyTabs from './MyTabs';



// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//     return (
//         <Drawer.Navigator
//             drawerContent={(props) => <CustomDrawerContent {...props} />}
//             screenOptions={{
//                 headerShown: false,
//             }}
//         >
//             <Drawer.Screen name="Home" component={MyTabs} />
//             <Drawer.Screen name="ProfileUser" component={ProfileUser} />
//             <Drawer.Screen name="Setting" component={Setting} />
//             <Drawer.Screen name="PersonalInformation" component={PersonalInformation} />
//             <Drawer.Screen name="PasswordSecurity" component={PasswordSecurity} />
//         </Drawer.Navigator>
//     );
// }

// export default MyDrawer;
