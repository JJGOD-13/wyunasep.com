import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Giving Water A Second {' '}
        <Text component='span' variant='gradient' gradient={{from: 'white', to: 'blue'}} inherit>
        Chance
        </Text>
        </Title>

        <Container fluid={true}>
          <Text size="lg" className={classes.description}>
          India's Leading Solution For Oil Water Seperators
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Live demo
          </Button>
        </div>
      </div>
    </div>
  );
}