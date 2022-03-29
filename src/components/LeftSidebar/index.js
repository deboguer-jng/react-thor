import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Box, Button, IconButton, Typography } from '@mui/material'

// Icons
import { FiMenu } from 'react-icons/fi'

// Images
import imgHammer from '../../assets/images/LeftBar/Bitmap.png'
import imgThunder from '../../assets/images/LeftBar/Bitmap-1.png'
import imgDashboard from '../../assets/images/dashboard.png'
import imgNode from '../../assets/images/nodes.png'
import imgInvestment from '../../assets/images/investment.png'
import imgFarm from '../../assets/images/farm.png'
import imgFaq from '../../assets/images/faq.png'
import imgDiscord from '../../assets/images/LeftBar/discord.png'
import imgTwitter from '../../assets/images/LeftBar/twitter.png'
import imgStack from '../../assets/images/LeftBar/stack.png'
import imgBubble from '../../assets/images/LeftBar/bubble.png'

import styles from './style.module.css';


const LeftSideBar = () => {

    const [collapseSideBar, setCollapseSideBar] = useState(false)

    return (
        <Box
            sx={{
                height: '100vh'
            }}
            display={{ xs: 'none', sm: 'none', md: 'flex' }}
        >
            <Box
                sx={{
                    width: '100px',
                    height: '100%'
                }}
                style={{
                    background: 'linear-gradient(180deg, #0E111C 0%, #11141D 100%'
                }}
            >
                <Box
                    marginTop={2}
                    sx={{ textAlign: 'center' }}
                    display={{ xs: 'none', sm: 'none', md: 'block' }}
                >
                    <IconButton
                        aria-label='menu'
                        sx={{ color: 'white' }}
                        onClick={() => setCollapseSideBar(!collapseSideBar)}
                    >
                        <FiMenu />
                    </IconButton>
                </Box>

                <Box marginTop={10}>
                    <Box marginBottom={4}>
                        <Button
                            variant='text'
                            sx={{
                                paddingX: '0',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}
                            fullWidth
                        >
                            <Box>
                                <Box
                                    sx={{
                                        width: '10px',
                                        height: '50px'
                                    }}
                                    style={{
                                        background:
                                            'linear-gradient(131.78deg, #EEEEEE 12.72%, #D4C78C 21.39%, #DEBF70 34.64%, #AE9555 44.61%, #A78C47 57.04%)'
                                    }}
                                ></Box>
                            </Box>
                            <Box marginLeft={2}>
                                <img src={imgHammer} alt='hammer' width={40} />
                            </Box>
                        </Button>
                    </Box>

                    <Box marginBottom={4}>
                        <Button variant='text' sx={{ marginLeft: 2 }}>
                            <img src={imgThunder} alt='thunder' width={40} />
                        </Button>
                    </Box>

                    <Box marginBottom={4}>
                        <Button variant='text' sx={{ marginLeft: 2 }}>
                            <img src={imgThunder} alt='thunder' width={40} />
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box
                display={{ xs: 'none', sm: 'none', md: 'flex' }}
                flexDirection='column'
                sx={{
                    width: collapseSideBar ? '100px' : '250px',
                    height: '100%'
                }}
                style={{ background: 'rgba(13, 16, 27, 0.64)' }}
            >
                <Box marginTop={20} paddingX={'10px'}>
                    {collapseSideBar ? (
                        <>
                            <Box marginBottom={2} sx={{ textAlign: 'center' }}>

                                <Button
                                    variant='text'
                                    sx={{ borderRadius: '50%', paddingX: 0, paddingY: 0 }}
                                >
                                    <NavLink to={'/'}
                                        className={({ isActive }) => (isActive ? `${styles.activeRouteCollapse}` : `${styles.inActiveRouteCollapse}`)}
                                    >
                                        <Box marginTop={'6px'}>
                                            <img src={imgDashboard} width={'20px'} />
                                        </Box>
                                    </NavLink>
                                </Button>
                            </Box>

                            <Box marginBottom={2} sx={{ textAlign: 'center' }}>

                                <Button
                                    variant='text'
                                    sx={{ borderRadius: '50%', paddingX: 0, paddingY: 0 }}
                                >
                                    <NavLink to={'/nodes'}
                                        className={({ isActive }) => (isActive ? `${styles.activeRouteCollapse}` : `${styles.inActiveRouteCollapse}`)}
                                    >
                                        <Box marginTop={'6px'}>
                                            <img src={imgNode} width={'20px'} />
                                        </Box>
                                    </NavLink>
                                </Button>
                            </Box>

                            <Box marginBottom={2} sx={{ textAlign: 'center' }}>

                                <Button
                                    variant='text'
                                    sx={{ borderRadius: '50%', paddingX: 0, paddingY: 0 }}
                                >
                                    <NavLink to={'/investment'}
                                        className={({ isActive }) => (isActive ? `${styles.activeRouteCollapse}` : `${styles.inActiveRouteCollapse}`)}
                                    >
                                        <Box marginTop={'6px'}>
                                            <img src={imgInvestment} width={'20px'} />
                                        </Box>
                                    </NavLink>
                                </Button>
                            </Box>

                            <Box marginBottom={2} sx={{ textAlign: 'center' }}>

                                <Button
                                    variant='text'
                                    sx={{ borderRadius: '50%', paddingX: 0, paddingY: 0 }}
                                >
                                    <NavLink to={'/farm'}
                                        className={({ isActive }) => (isActive ? `${styles.activeRouteCollapse}` : `${styles.inActiveRouteCollapse}`)}
                                    >
                                        <Box marginTop={'6px'}>
                                            <img src={imgFarm} width={'20px'} />
                                        </Box>
                                    </NavLink>
                                </Button>
                            </Box>

                            <Box marginBottom={2} sx={{ textAlign: 'center' }}>

                                <Button
                                    variant='text'
                                    sx={{ borderRadius: '50%', paddingX: 0, paddingY: 0 }}
                                >
                                    <NavLink to={'/faq'}
                                        className={({ isActive }) => (isActive ? `${styles.activeRouteCollapse}` : `${styles.inActiveRouteCollapse}`)}
                                    >
                                        <Box marginTop={'6px'}>
                                            <img src={imgFaq} width={'20px'} />
                                        </Box>
                                    </NavLink>
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box marginBottom={2}>

                                <Button
                                    variant='text'
                                    fullWidth
                                    sx={{ paddingX: 0, paddingY: 0, borderRadius: '20px' }}

                                >
                                    <NavLink to={'/'}
                                        className={({ isActive }) => (isActive ? `${styles.activeRoute}` : `${styles.inActiveRoute}`)}
                                    >
                                        <Box marginTop={'6px'}>
                                            <img src={imgDashboard} width={'20px'} />
                                        </Box>
                                        <Box marginLeft={'20px'}>
                                            <Typography variant="subtitle2" className={styles.text} component="div">
                                                DASHBOARD
                                            </Typography>
                                        </Box>
                                    </NavLink>
                                </Button>
                            </Box>

                            <Box marginBottom={2}>

                                <Button
                                    variant='text'
                                    fullWidth
                                    sx={{ paddingX: 0, paddingY: 0, borderRadius: '20px' }}                                >
                                    <NavLink to={'/nodes'}
                                        className={({ isActive }) => (isActive ? `${styles.activeRoute}` : `${styles.inActiveRoute}`)}
                                    >
                                        <Box marginTop={'6px'}>
                                            <img src={imgNode} width={'20px'} />
                                        </Box>
                                        <Box
                                            marginLeft={'20px'}
                                        >
                                            <Typography variant="subtitle2" className={styles.text} component="div">
                                                My NODES
                                            </Typography>
                                        </Box>
                                    </NavLink>

                                </Button>
                            </Box>

                            <Box marginBottom={2}>

                                <Button
                                    variant='text'
                                    fullWidth
                                    sx={{ paddingX: 0, paddingY: 0, borderRadius: '20px' }}                                >
                                    <NavLink to={'/investment'}
                                        className={({ isActive }) => (isActive ? `${styles.activeRoute}` : `${styles.inActiveRoute}`)}
                                    >
                                        <Box marginTop={'6px'}>
                                            <img src={imgInvestment} width={'20px'} />
                                        </Box>
                                        <Box
                                            marginLeft={'20px'}
                                        >
                                            <Typography variant="subtitle2" className={styles.text} component="div">
                                                INVESTMENTS
                                            </Typography>
                                        </Box>
                                    </NavLink>

                                </Button>
                            </Box>

                            <Box marginBottom={2}>

                                <Button
                                    variant='text'
                                    fullWidth
                                    sx={{ paddingX: 0, paddingY: 0, borderRadius: '20px' }}                                >
                                    <NavLink to={'/farm'}
                                        className={({ isActive }) => (isActive ? `${styles.activeRoute}` : `${styles.inActiveRoute}`)}
                                    >
                                        <Box marginTop={'6px'}>
                                            <img src={imgFarm} width={'20px'} />
                                        </Box>
                                        <Box
                                            marginLeft={'20px'}
                                        >
                                            <Typography variant="subtitle2" className={styles.text} component="div">
                                                FARM
                                            </Typography>
                                        </Box>
                                    </NavLink>

                                </Button>
                            </Box>

                            <Box marginBottom={2}>

                                <Button
                                    variant='text'
                                    fullWidth
                                    sx={{ paddingX: 0, paddingY: 0, borderRadius: '20px' }}                                >
                                    <NavLink to={'/faq'}
                                        className={({ isActive }) => (isActive ? `${styles.activeRoute}` : `${styles.inActiveRoute}`)}
                                    >
                                        <Box marginTop={'6px'}>
                                            <img src={imgFaq} width={'20px'} />
                                        </Box>
                                        <Box
                                            marginLeft={'20px'}
                                        >
                                            <Typography variant="subtitle2" className={styles.text} component="div">
                                                FAQ
                                            </Typography>
                                        </Box>
                                    </NavLink>

                                </Button>
                            </Box>
                        </>
                    )}
                </Box>

                {collapseSideBar ? null : (
                    <Box
                        marginTop={35}
                        display={{ xs: 'none', sm: 'none', md: 'flex' }}
                        justifyContent='center'
                    >
                        <Button variant='text' size='small' sx={{ minWidth: '40px' }}>
                            <img src={imgDiscord} width={'20px'} />
                        </Button>

                        <Button variant='text' size='small' sx={{ minWidth: '40px' }}>
                            <img src={imgTwitter} width={'20px'} />
                        </Button>
                        <Button variant='text' size='small' sx={{ minWidth: '40px' }}>
                            <img src={imgStack} width={'20px'} />
                        </Button>

                        <Button variant='text' size='small' sx={{ minWidth: '40px' }}>
                            <img src={imgBubble} width={'20px'} />
                        </Button>
                    </Box>
                )}
            </Box>
        </Box >
    )
}

export default LeftSideBar
