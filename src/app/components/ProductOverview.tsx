'use client'
import { Title, Text, Container, Flex, Stack, SimpleGrid, Center, Grid, List } from '@mantine/core'

export default function Product() {
    return (
        // <Container >
        //     <Center>
        //     <Grid gutter={80}>
        //         <Grid.Col span={{ base: 12, md: 5}}>
        //         <Stack>
        //         <Title>
        //             HydroCyclone Efficiency
        //         </Title>
        //         <Text c='dimmed'>
        //         Our Hydro-cyclone technology provides unmatched separation capabilities. Allowing for faster, more efficient separation with a much smaller footprint.
        //         </Text>
        //         </Stack>
        //         </Grid.Col>
        //             <Center>
        //                     <List>
        //                             <List.Item>No Moving parts       </List.Item>
        //                             <List.Item>No chemicals          </List.Item>
        //                             <List.Item>No settling period    </List.Item>
        //                             <List.Item>No sedimentation tanks</List.Item>
        //                             <List.Item>Self Cleaning         </List.Item>
        //                     </List>
        //             </Center>
        //     </Grid>
        //     </Center>
        // </Container>
        <div className=' flex justify-center '>
            <Grid gutter={80}>
                <Grid.Col span={{ base: 12, md: 5 }}>
                    <Title>
                        HydroCyclone Efficiency
                    </Title>
                    <Text c='dimmed'>
                    Our Hydro-cyclone technology provides unmatched separation capabilities. Allowing for faster, more efficient separation with a much smaller footprint.
                    </Text>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 7 }}>
                    <List>
                        <List.Item>No Moving parts       </List.Item>
                        <List.Item>No chemicals          </List.Item>
                        <List.Item>No settling period    </List.Item>
                        <List.Item>No sedimentation tanks</List.Item>
                        <List.Item>Self Cleaning         </List.Item>
                    </List>
                
                </Grid.Col>
            </Grid>
        </div>
    )
}