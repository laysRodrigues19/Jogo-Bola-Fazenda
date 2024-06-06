import { View, Image,  } from 'react-native'
import { styles } from './styles'

type Props = {
  posY: number,
}


export function Bart({ posY }: Props) {
  return (
    <View style={[styles.container, {bottom: posY}]}>

       
       <Image source={require('./OIP.jpg')} style={[styles.container, {bottom: posY}]}/>
      
    </View>
  )
}