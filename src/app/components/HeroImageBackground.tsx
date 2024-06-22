import cx from 'clsx';
import { Flex, Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import Link from 'next/link';
import Product from './ProductOverview';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Giving Water A Second {' '}
        <Text component='span' variant='text' gradient={{from: 'white', to: 'blue'}} inherit>
        Chance
        </Text>
        </Title>

        <Container fluid={true}>
          <Text size="lg" className={classes.description}>
          India's Leading Solution For Oil Water Seperators
          </Text>
        </Container>

        <div className={classes.controls}>
        <Link href='/contact'>
          <Button className={classes.control} variant="blue" size="lg" radius="md">
            Get Quote
          </Button>
        </Link>
        </div>
      </div>
    </div>
   
  );
}