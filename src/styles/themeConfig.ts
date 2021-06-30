import { extendTheme } from "@chakra-ui/react";

export const themeConfig = extendTheme({
	styles:{
		global:{
			body:{
				bg:'#FFFFFF',
				color:'#000000'
			}
		}
	},
	fonts:{
		heading: 'Poppins',
		body: 'Roboto'
	}
})