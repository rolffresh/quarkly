import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Icon, Box, Input, Button, Structure, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Formspree } from "@quarkly/components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Second to none
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Visit us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							4998 Hanover Street, New York, 10011
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Email us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								hello@company.com
							</Link>
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Call us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							+1 (234) 567-89-00
							<br />
							+1 (234) 567-89-00
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="0"
						margin="48px 0"
						max-width="360px"
						position="relative"
						display="flex"
					>
						<Icon
							category="fa"
							icon={FaFacebookF}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaTwitter}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaLinkedinIn}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Box
						max-width="360px"
						padding="56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="--color-primary"
					>
						<Text as="h3" font="--headline3" margin="0 0 20px 0">
							Leave us message
						</Text>
						<Formspree>
							<Stack gap="16px">
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</StackItem>
								<StackItem width="100%">
									<Button background="--color-dark">
										Send
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Structure cells-number-total="2" padding="80px 0px 80px 0px" background="--color-dark">
			<Override slot="Content" md-display="flex" md-flex-wrap="wrap">
				<Override slot="cell-0">
					{"            "}
					<Text margin="0px 0px 0px 0px" color="--orange" font="--lead" md-margin="0px 0px 20px 0px">
						{"                "}I’m a subtitle{"\n            "}
					</Text>
					{"            "}
					<Text margin="0px 0px 0px 0px" color="--light" font="--headline2" md-margin="0px 0px 30px 0px">
						{"                "}Hey! I’m writing this sentence because I don’t like the lorem ipsums texts{"\n            "}
					</Text>
					{"        "}
				</Override>
				<Override slot="cell-1">
					{"            "}
					<Text margin="0px 0px 40px 0px" color="--light" font="--base">
						{"                "}Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien convallis eu. Nulla ut turpis in diam dapibus consequat.{"\n            "}
					</Text>
					{"            "}
					<Text margin="0px 0px 0px 0px" color="--light" font="--base">
						{"                "}Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien convallis eu. Nulla ut turpis in diam dapibus consequat.{"\n            "}
					</Text>
					{"        "}
				</Override>
				<Override slot="Cell 0" display="flex" flex-direction="column" justify-content="space-between" />
				<Override slot="Cell 0th" display="flex" flex-direction="column" md-width="100%" />
				{"        "}{"        "}{"        "}{"        "}{"    "}
			</Override>
			{"    "}
		</Structure>
		<Structure cells-number-total="2" padding="80px 0px 80px 0px" cells-number-group="2">
			<Override slot="Content" lg-display="flex" lg-flex-wrap="wrap" lg-justify-content="center">
				<Override slot="cell-0">
					{"            "}
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--headline1"
						lg-text-align="center"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						lg-width="100%"
					>
						{"                "}Making trip is fun. Travel with friends.{"\n            "}
					</Text>
					{"            "}
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD3"
						font="--lead"
						lg-text-align="center"
						lg-width="100%"
					>
						{"                "}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua{"\n            "}
					</Text>
					{"            "}
					<Box
						display="flex"
						align-items="flex-start"
						margin="0px 0px 32px 0px"
						lg-width="50%"
						lg-margin="0px 0px 0px 0px"
						lg-padding="0px 16px 0px 0px"
						md-width="100%"
						md-margin="0px 0px 32px 0px"
						md-padding="0px 0px 0px 0px"
					>
						{"                "}
						<Text
							padding="7px 24px 8px 24px"
							margin="0px 0px 0px 0px"
							font="--headline3"
							background="--color-orange"
							border-radius="50px"
							align-items="center"
							display="flex"
							justify-content="center"
							color="--light"
							width="49px"
							height="49px"
						>
							{"                    "}1{"\n                "}
						</Text>
						{"                "}
						<Box margin="0px 0px 0px 22px">
							{"                    "}
							<Text margin="0px 0px 8px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
								{"                        "}Find your trip partner{"\n                    "}
							</Text>
							{"                    "}
							<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
								{"                        "}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua{"\n                    "}
							</Text>
							{"                "}
						</Box>
						{"            "}
					</Box>
					{"            "}
					<Box
						display="flex"
						align-items="flex-start"
						margin="0px 0px 32px 0px"
						lg-width="50%"
						lg-margin="0px 0px 0px 0px"
						lg-padding="0px 16px 0px 0px"
						md-width="100%"
						md-margin="0px 0px 32px 0px"
						md-padding="0px 0px 0px 0px"
					>
						{"                "}
						<Text
							padding="7px 24px 8px 24px"
							margin="0px 0px 0px 0px"
							font="--headline3"
							background="--color-orange"
							border-radius="50px"
							align-items="center"
							display="flex"
							justify-content="center"
							color="--light"
							width="49px"
							height="49px"
						>
							{"                    "}2{"\n                "}
						</Text>
						{"                "}
						<Box margin="0px 0px 0px 22px">
							{"                    "}
							<Text margin="0px 0px 8px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
								{"                        "}Plan trip with easy steps{"\n\n\n                    "}
							</Text>
							{"                    "}
							<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
								{"                        "}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua{"\n                    "}
							</Text>
							{"                "}
						</Box>
						{"            "}
					</Box>
					{"        "}
				</Override>
				<Override
					slot="Cell 0th"
					display="flex"
					flex-direction="column"
					flex-wrap="wrap"
					lg-width="100%"
					lg-flex-direction="row"
					lg-align-items="center"
					lg-justify-content="center"
					lg-margin="0px 0px 40px 0px"
					sm-margin="0px 0px 0px 0px"
				/>
				<Override slot="cell-1">
					{"            "}
					<Image
						src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone22.png?v=2021-08-26T11:41:54.452Z"
						max-width="100%"
						transform="translateY(10px)"
						transition="transform 0.5s ease-in-out 0s"
						hover-transform="translateY(0px)"
					/>
					{"        "}
				</Override>
				<Override slot="Cell 1" align-items="flex-end" lg-margin="30px 0px 0px 0px" />
				<Override slot="Cell 1st" display="flex" justify-content="flex-end" />
				{"        "}{"        "}{"        "}{"        "}{"        "}{"    "}
			</Override>
			{"    "}
		</Structure>
		<Structure
			cells-number-total="2"
			cells-number-group="2"
			padding="140px 0px 140px 0px"
			min-height="100vh"
			align-items="center"
			background="#FFFFFF url(https://images.unsplash.com/photo-1533670803344-afe2e89e5493?auto=format&fit=crop&w=1500&q=80) 100% 100% /100% no-repeat scroll padding-box"
			md-background="none"
			md-padding="96px 0px 70px 0px"
			lg-background="#fff"
		>
			<Override slot="Content" md-grid-template-columns="1fr" lg-grid-template-columns="1fr">
				<Override slot="cell-1">
					{"            "}
					<Box display="none" />
					{"        "}
				</Override>
				<Override slot="cell-0">
					{"            "}
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--headline1"
						lg-text-align="center"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						{"                "}Comfort is Now Beautiful{"\n            "}
					</Text>
					{"            "}
					<Text margin="0px 0px 40px 0px" color="--darkL2" font="--lead" lg-text-align="center">
						{"                "}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua{"\n            "}
					</Text>
					{"            "}
					<Box display="flex" sm-flex-direction="column" sm-text-align="center" lg-justify-content="center">
						{"                "}
						<Link
							href="#"
							padding="12px 24px 12px 24px"
							color="--dark"
							background="--color-secondary"
							text-decoration-line="initial"
							font="--lead"
							border-radius="8px"
							margin="0px 16px 0px 0px"
							sm-margin="0px 0px 16px 0px"
							sm-text-align="center"
							hover-background="--color-orange"
							hover-transition="background-color 0.2s ease-in-out 0s"
							transition="background-color 0.2s ease-in-out 0s"
							flex-direction="row"
							lg-padding="12px 20px 12px 20px"
						>
							{"                    "}Get Started{"\n                "}
						</Link>
						{"                "}
						<Link
							href="#"
							padding="12px 24px 12px 24px"
							color="--darkL1"
							text-decoration-line="initial"
							font="--lead"
							border-radius="8px"
							margin="0px 16px 0px 0px"
							border-width="2px"
							border-style="solid"
							border-color="--color-darkL1"
							sm-margin="0px 0px 0px 0px"
							sm-text-align="center"
							lg-margin="0px 0px 0px 0px"
							hover-transition="border 0.2s ease-in-out 0s"
							hover-border-color="--color-orange"
							transition="border 0.2s ease-in-out 0s"
							lg-padding="12px 20px 12px 20px"
						>
							{"                    "}Check our video{"\n                "}
						</Link>
						{"            "}
					</Box>
					{"        "}
				</Override>
				<Override
					slot="Cell 0th"
					md-align-items="center"
					md-display="flex"
					md-flex-direction="column"
					md-justify-content="center"
					lg-width="100%"
				/>
				{"        "}{"        "}{"        "}{"    "}
			</Override>
			{"    "}
		</Structure>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});