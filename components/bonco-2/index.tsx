import { View, Image,  } from 'react-native'
import { styles } from './styles'

type Props = {
  posY: number,
}


export function Lisa({ posY }: Props) {
  return (
    <View style={[styles.container, {bottom: posY}]}>

       <Image source={require('./2063935-gatinha-vaca-com-aquarela-ilustracao-vetor.jpg')} style={[styles.container, {bottom: posY}]}/>
      
    </View>
  )
}