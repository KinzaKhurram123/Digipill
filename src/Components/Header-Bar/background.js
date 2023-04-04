import React from 'react';
import {View, ImageBackground} from 'react-native';

// export default function Background ({ children })  {
//   return (
//     <View>
//       <ImageBackground source={require("../../assets/Images/31.jpg")} style={{ flex: 1 }} />
//       <View style={{ position: "absolute" }}>
//         {children}
//       </View>
//     </View>
//   );
// };

export default function Anotherbackground ({children}){
  return(
  <View>
     <ImageBackground source={require("../../assets/Images/31.jpg")} style={{ height: '100%' }} />
     <View style={{ position: "absolute" }}>
       {children}
     </View>
  </View>
  )
}


