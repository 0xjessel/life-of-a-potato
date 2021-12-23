import { NFTStorage, File } from 'nft.storage' 
const client = new NFTStorage({ token: API_TOKEN })  

const metadata = await client.store({   
  name: 'Pinpie',   
  description: 'Pin is not delicious beef!',   
  image: new File(
    [       /* data */     ],
    'pinpie.jpg',
    { type: 'image/jpg' },
  ),
}) 

console.log(metadata.url)
