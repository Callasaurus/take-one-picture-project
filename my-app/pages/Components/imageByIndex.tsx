import car1 from '../../Images/car1.png'
import car2 from '../../Images/car2.png'
import car3 from '../../Images/car3.png'
import car4 from '../../Images/car4.png'
import car5 from '../../Images/car5.png'
import car6 from '../../Images/car6.png'
import car7 from '../../Images/car7.png'
import car8 from '../../Images/car8.png'
import car9 from '../../Images/car9.png'

export const images: any[] = [car1, car2, car3, car4, car5, car6, car7, car8, car9]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex