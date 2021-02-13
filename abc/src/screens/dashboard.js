import React, {Component} from 'react';  
import { View, Text ,SafeAreaView,ScrollView,Image,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './style';

class Dashboard extends React.Component<props> {


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
  
            <Text style={style.text_style_list_dash}>Dashboard</Text>
  
        
          </View>
          <View >
  
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Notificaions')}
         
          >
        
          <Image    
           style={style.img_style_noti}
           source={require('../icon/notification.png')} />
  
  
          </TouchableOpacity>
          </View>
  
  
         </View>

         <View style={{height:22}}></View>
  
         <Text style={style.text_style_list} >List of Account</Text>
  
  
         <View style={style.account_style}>
  
         <LinearGradient
          start={{ x: 0.9, y: 0.0 }}
          style={style.account_style_view1}
        
         colors={['#cdabdb', '#84499e', '#84499e']}        >




            <Text style={style.txt_account_style} >Bank Account</Text>
            <Text style={style.txt_account_style2} >$2500.00</Text>

  
          </LinearGradient>
  
        
  

          <LinearGradient
          start={{ x: 0.9, y: 0.0 }}
          
          style={style.account_style_view2}
          colors={['#edd3b7', '#FEC180', '#FEC180']}
        >
  
        
            <Text  style={style.txt_account_style}>Credit card</Text>
            <Text  style={style.txt_account_style2}>$1500.00</Text>
  
        
          </LinearGradient>
  
  
  

           <LinearGradient     
           style={style.account_style_view3}
           start={{ x: 0.9, y: 0.0 }}
           
           style={style.account_style_view3}
           colors={['#dde3d8', '#D0FFAE', '#D0FFAE']}
         >
   
  
           <Text  style={style.txt_account_style}>Cash</Text>
            <Text  style={style.txt_account_style2}>$800.00</Text>
  
  
          
  
  
            </LinearGradient>
  
            </View>



           


          <View style={style.view_48}>

          <Text  style={style.txt_view_48_style}>$4800.00</Text>
          <Text  style={style.txt_view_48_style2}>Total Balance</Text>
  
  

          </View>

          
          <View style={style.view_48_below}>

          
  

          </View>



       <Text style={style.text_style_list} >Last Record Overview</Text>



       <View style={style.view_groceries}>

      

      
       <LinearGradient
          start={{ x: 0.9, y: 0.0 }}
          style={style.view_groceries_cart}
          colors={['#edd3b7', '#FEC180', '#FEC180']}
        >



       <Image    
            resizeMode={'contain'} 
           style={style.img_style_cart}
           source={require('../icon/cart.png')} />
  



      </LinearGradient>


      <View style={style.view_groceries_name}>



         <Text  style={style.txt_groceris_name}>Groceries</Text>
         <Text  style={style.txt_groceris_name2}>Credit card</Text>
  
  

      </View>

 
  
      <View  style={style.view_groceries_empty}>



    
  

      </View>



      <View style={style.view_groceries_price}>



    
<Text  style={style.txt_groceris_name2}>Today</Text>
<Text  style={style.txt_groceris_name3}>$250.00</Text>


</View>






       </View>








       <View style={style.view_groceries}>

      
       <LinearGradient
          start={{ x: 0.9, y: 0.0 }}
          style={style.view_groceries_cloth}
          colors={['#cdabdb', '#84499e', '#84499e']}
        >



<Image    
     resizeMode={'contain'} 
    style={style.img_style_cart}
    source={require('../icon/shirt.png')} />




</LinearGradient>


<View style={style.view_groceries_name}>



  <Text  style={style.txt_groceris_name}>Clothes</Text>
  <Text  style={style.txt_groceris_name2}>Credit card</Text>



</View>



<View  style={style.view_groceries_empty}>






</View>



<View style={style.view_groceries_price}>




<Text  style={style.txt_groceris_name2}>03/04/2018</Text>
<Text  style={style.txt_groceris_name3_c}>$100.00</Text>


</View>






</View>
































<View style={style.view_groceries}>

  

       <LinearGradient
          start={{ x: 0.9, y: 0.0 }}
          style={style.view_groceries_rental}
        
          colors={['#dde3d8', '#D0FFAE', '#D0FFAE']}
        >

       <Image    
           resizeMode={'contain'} 
           style={style.img_style_cart}
           source={require('../icon/home.png')} />
  



      </LinearGradient>


      <View style={style.view_groceries_name}>



         <Text  style={style.txt_groceris_name}>Rental</Text>
         <Text  style={style.txt_groceris_name2}>Cash</Text>
  
  

      </View>

 
  
      <View  style={style.view_groceries_empty}>



    
  

      </View>



      <View style={style.view_groceries_price}>



    
<Text  style={style.txt_groceris_name2}>01/03/2018</Text>
<Text  style={style.txt_groceris_name3_r}>$500.00</Text>


</View>






       </View>




















        </View>
  
  
      </SafeAreaView>
  
  
  
      </ScrollView>
  
      );
    }
  }
  

  export default Dashboard;