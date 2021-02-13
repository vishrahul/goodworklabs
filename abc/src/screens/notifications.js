import React, {Component} from 'react';  
import { View, Text ,SafeAreaView,ScrollView,Image,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './style';

class Notificaions extends React.Component<props> {

  static navigationOptions = {
  
    header:null,
    
  };


    render() {
      return (
        <ScrollView>
  
  
    
        <SafeAreaView>
  
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',margin:"2%" }}>
     
         <View  style={style.nav_style}>
  
           <View>
           <Image
            style={style.img_style_menu}
            source={require('../icon/menu.png')} />
  
          </View>
          <View>
  
            <Text style={style.text_style_list_dash}>Notificaions</Text>
  
        
          </View>
          <View >
  
          <TouchableOpacity
      
          >
        
          <Image    
           style={style.img_style_noti}
           source={require('../icon/notification.png')} />
  
  
          </TouchableOpacity>
          </View>
  
  
         </View>

       
  
         <View style={{height:36}}></View>
  



       <View style={style.view_note1}>

      

      
       <View
         
  
        
        >



       <Image    
       
            resizeMode={'contain'} 
           style={style.img_style_noti1}
           source={require('../icon/first_man_noti.png')} />
  



      </View>


      <View style={style.view_groceries_name}>



         <Text  style={style.txt_noti_first}>You received a payment of $120.00 from Jhon Smith</Text>
         <Text  style={style.txt_noti_first2}>08:39 AM</Text>
  
  

      </View>

 
  






       </View>















       <View style={style.view_note1}>

      

      
       <View
         
  
        
        >



       <Image    
       
            resizeMode={'contain'} 
           style={style.img_style_noti1}
           source={require('../icon/sec_man_noti.png')} />
  



      </View>


      <View style={style.view_groceries_name}>



         <Text  style={style.txt_noti_first}>James Smith requested a payment of $450.00</Text>



         
      
       <LinearGradient
          start={{ x: 0.9, y: 0.0 }}
          style={style.img_style_noti_pad}
 
          colors={['#edd3b7', '#FEC180', '#FEC180']}
        >

            <Text style={style.pay_text}>Pay</Text >

        </LinearGradient>
 

 



         <Text  style={style.txt_noti_first2_top}>07:00 AM</Text>


  
  

      </View>









       </View>















       <View style={style.view_note1}>

      

      
       <View
         
  
        
        >



       <Image    
       
            resizeMode={'contain'} 
           style={style.img_style_noti1}
           source={require('../icon/master_card.png')} />
  



      </View>


      <View style={style.view_groceries_name}>



         <Text  style={style.txt_noti_first}>Your new Payment method has beed added successfully</Text>
         <Text  style={style.txt_noti_first2}>03:39 AM</Text>
  
  

      </View>

 
  






       </View>















       <View style={style.view_note1}>

      

      
       <View
         
  
        
        >



       <Image    
       
            resizeMode={'contain'} 
           style={style.img_style_noti1}
           source={require('../icon/third_girl_noti.png')} />
  



      </View>


      <View style={style.view_groceries_name}>



         <Text  style={style.txt_noti_first}>You received a payment of $400 for Willan Henry</Text>
         <Text  style={style.txt_noti_first2}>08:39 AM</Text>
  
  

      </View>

 
  






       </View>




































       <View style={style.view_note1}>

      

      
       <View
         
  
        
        >



       <Image    
       
            resizeMode={'contain'} 
           style={style.img_style_noti1}
           source={require('../icon/fourth_man_noti.png')} />
  



      </View>


      <View style={style.view_groceries_name}>



         <Text  style={style.txt_noti_first}>Mithun Kumar requested a payment of $360.00</Text>

         
      
       <LinearGradient
          start={{ x: 0.9, y: 0.0 }}
          style={style.img_style_noti_pad}
 
          colors={['#dde3d8', '#D0FFAE', '#D0FFAE']}
        >

            <Text style={style.pay_text}>Pay</Text >

        </LinearGradient>
 

         <Text  style={style.txt_noti_first2_top}>7 March 2018</Text>
  
  

      </View>

 
  






       </View>
















        </View>
  
  
      </SafeAreaView>
  
  
  
      </ScrollView>
  
      );
    }
  }
  

  export default Notificaions;