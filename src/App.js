import { Button, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';

function App() {
  return (
    <VStack spacing='80px'>
      <VStack
        bgImg='images/bg-header-desktop.png'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        w='full'
        pt='90px'
        spacing={12}
      >
        <Image src='images/logo.svg' boxSize='140px' />
        <VStack spacing={8}>
          <Text
            as='h1'
            fontSize={{ base: '3xl', md: '5xl', lg: '5xl' }}
            align='center'
          >
            A history of everything you copy
          </Text>
          <Text
            w={{ base: '100%', md: '70%', lg: '70%' }}
            as='p'
            align='center'
          >
            {' '}
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </Text>
        </VStack>
        <Stack direction={{ base: 'column', md: 'row', lg: 'row' }}>
          <Button colorScheme='teal' size='lg'>
            Download for iOS
          </Button>
          <Button colorScheme='blue' size='lg'>
            Dowload for Mac
          </Button>
        </Stack>
      </VStack>
      <VStack>
        <Text
          as='h2'
          align='center'
          fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}
        >
          Keep track of your snippets
        </Text>
        <Text as='p' w={{ base: '100%', md: '70%', lg: '50%' }} align='center'>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </Text>
      </VStack>
      <Stack
        w='full'
        direction={{ base: 'column', md: 'column', lg: 'row' }}
        align='center'
      >
        <Image
          src='images/image-computer.png'
          w={{ base: '300px', md: '600px', lg: '960px' }}
          ml={{ base: 0, md: 0, lg: -6 }}
        />
        <VStack
          direction='column'
          pl={{ base: 0, lg: '100px' }}
          pt='0'
          spacing={12}
        >
          <VStack
            align={{ base: 'center', md: 'center', lg: 'start' }}
            px={0}
            mt={{ base: '1rem' }}
            w='full'
          >
            <Text as='h3' align='start'>
              Quick Search
            </Text>
            <Text
              color='gray.500'
              fontSize='lg'
              w={{ base: '100%', md: '70%', lg: '60%' }}
              px={0}
              align={{ base: 'center', md: 'center', lg: 'start' }}
            >
              Easily search your snippets by content, category, web address,
              application, and more.
            </Text>
          </VStack>
          <VStack
            align={{ base: 'center', md: 'center', lg: 'start' }}
            px={0}
            w='full'
          >
            <Text as='h3'>iCloud Sync</Text>
            <Text
              px={0}
              color='gray.500'
              fontSize='lg'
              w={{ base: '100%', md: '70%', lg: '60%' }}
              align={{ base: 'center', md: 'center', lg: 'start' }}
            >
              Instantly saves and syncs snippets across all your devices.
            </Text>
          </VStack>
          <VStack
            align={{ base: 'center', md: 'center', lg: 'start' }}
            w='full'
          >
            <Text as='h3'>Complete History</Text>
            <Text
              color='gray.500'
              fontSize='lg'
              px={0}
              w={{ base: '100%', md: '70%', lg: '60%' }}
              align={{ base: 'center', md: 'center', lg: 'start' }}
            >
              Retrieve any snippets from the first moment you started using the
              app.
            </Text>
          </VStack>
        </VStack>
      </Stack>
      <VStack>
        <Text as='h2' fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
          {' '}
          Access Clipboard anywhere
        </Text>
        <Text as='p' align='center' w={{ base: '100%', md: '70%', lg: '70%' }}>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </Text>
      </VStack>
      <Image src='images/image-devices.png' />
      <VStack>
        <Text as='h2' fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
          {' '}
          Supercharge your workflow
        </Text>
        <Text as='p' align='center' w='100%'>
          We’ve got the tools to boost your productivity.
        </Text>
      </VStack>
      <Stack
        spacing={{ base: '2rem', md: '3rem', lg: 2 }}
        w='full'
        px={12}
        direction={{ base: 'column', md: 'column', lg: 'row' }}
      >
        <VStack>
          <Image src='images/icon-blacklist.svg' pb={6} />
          <Text as='h3'>Create blacklists</Text>
          <Text
            as='p'
            align='center'
            w={{ base: '100%', md: '70%', lg: '70%' }}
          >
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </Text>
        </VStack>
        <VStack>
          <Image src='images/icon-text.svg' pb={6} />
          <Text as='h3'>Plain text snippets</Text>
          <Text
            as='p'
            align='center'
            w={{ base: '100%', md: '70%', lg: '70%' }}
          >
            Remove unwanted formatting from copied text for a consistent look.
          </Text>
        </VStack>
        <VStack>
          <Image src='images/icon-preview.svg' pb={6} />
          <Text as='h3'>Sneak preview</Text>
          <Text
            as='p'
            align='center'
            w={{ base: '100%', md: '70%', lg: '70%' }}
          >
            Quick preview of all snippets on your Clipboard for easy access.
          </Text>
        </VStack>
      </Stack>
      <Stack
        h={{ base: 'inherit', lg: '250px' }}
        justify='space-evenly'
        align='center'
        w='full'
        px={{ base: 2, lg: 8 }}
        direction={{ base: 'column', md: 'column', lg: 'row' }}
        spacing={{ base: '6rem', lg: 'inherit' }}
      >
        <Image src='images/logo-google.png' />
        <Image src='images/logo-ibm.png' />
        <Image src='images/logo-microsoft.png' />
        <Image src='images/logo-hp.png' />
        <Image src='images/logo-vector-graphics.png' />
      </Stack>

      <VStack pb='140px' spacing={8}>
        <Text as='h2' fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>
          {' '}
          Clipboard for iOS and Mac OS
        </Text>
        <Text as='p' align='center' w={{ base: '100%', md: '70%', lg: '70%' }}>
          {' '}
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </Text>
        <Stack direction={{ base: 'column', md: 'row', lg: 'row' }}>
          <Button colorScheme='teal' size='lg'>
            Download for iOS
          </Button>
          <Button colorScheme='blue' size='lg'>
            Download for Mac
          </Button>
        </Stack>
      </VStack>

      <Stack
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        align='center'
        w='full'
        justify='space-evenly'
        py={10}
        bg='gray.100'
      >
        <Image src='images/logo.svg' boxSize={12} />
        <Stack
          direction={{ base: 'column', md: 'row', lg: 'row' }}
          spacing={{ base: 4, md: 12, lg: 12 }}
          fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        >
          <VStack align='start'>
            <Text _hover={{ color: 'teal' }}> FAQs</Text>
            <Text _hover={{ color: 'teal' }}>Contact Us</Text>
          </VStack>
          <VStack align='start'>
            <Text _hover={{ color: 'teal' }}>Privacy Policy</Text>
            <Text _hover={{ color: 'teal' }}>Press Kit</Text>
          </VStack>
          <VStack align='start'>
            <Text _hover={{ color: 'teal' }}> Install Guide</Text>
            <Text>.</Text>
          </VStack>
        </Stack>
        <HStack spacing={6}>
          <Image
            _hover={{ filter: 'invert(100%)' }}
            src='images/icon-facebook.svg'
          />
          <Image _hover={{ color: 'teal' }} src='images/icon-twitter.svg' />
          <Image _hover={{ color: 'teal' }} src='images/icon-instagram.svg' />
        </HStack>
      </Stack>
    </VStack>
  );
}

export default App;
