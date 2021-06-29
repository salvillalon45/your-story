// -----------------------------------------------
//
// Components -> Header.js
// Desc: Sidebar for web app
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';

// Gatsby
import { Link, navigate } from 'gatsby';

// Material UI
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Styling
import {
	MenuButton,
	SidebarContentContainer,
	SidebarLine,
	SidebarContainer
} from './SidebarStyledComponents';

// Util
import { logoutUser } from '../../../util/firebaseUtil';
// -----------------------------------------------

const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: 'auto'
	},
	anchorTag: {
		textDecoration: 'none'
	},
	listItemText: {
		color: 'var(--turquoise)'
	},
	listItemIcon: {
		color: 'var(--turquoise)'
	},
	logoutlistItemText: {
		color: 'var(--orange)',
		fontFamily: 'var(--source)'
	},
	logoutListItemIcon: {
		color: 'var(--orange)'
	},
	logoutListItem: {
		cursor: 'pointer'
	}
});

const SidebarDrawer = withStyles({
	root: {
		'& .MuiPaper-root': {
			backgroundColor: 'var(--grey)'
		},
		'& .MuiTypography-body1': {
			fontFamily: 'var(--source)'
		}
	}
})(Drawer);

function Sidebar() {
	const classes = useStyles();
	const [showMenu, setShowMenu] = React.useState(false);

	function toggleDrawer(event) {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setShowMenu(!showMenu);
	}

	function createIcon(descriptionIndex) {
		if (descriptionIndex === 0) {
			return <HomeIcon />;
		} else if (descriptionIndex === 1) {
			return <InfoIcon />;
		} else if (descriptionIndex === 2) {
			return <AddCircleIcon />;
		} else if (descriptionIndex === 3) {
			return <EditIcon />;
		} else if (descriptionIndex === 4) {
			return <VisibilityIcon />;
		}
	}

	function createSidebarMenuItems() {
		return [
			['Home', '/dashboard'],
			['About', '/about'],
			['Add To Your Story', '/add'],
			['Edit Your Story', '/edit'],
			['View Your Story', '/view']
		].map((navArray, index) => {
			return (
				<ListItem button key={navArray[0]}>
					<ListItemIcon className={classes.listItemIcon}>
						{createIcon(index)}
					</ListItemIcon>

					<Link className={classes.anchorTag} to={navArray[1]}>
						<ListItemText
							className={classes.listItemText}
							primary={navArray[0]}
						/>
					</Link>
				</ListItem>
			);
		});
	}

	function handleLogout() {
		logoutUser();
		navigate('/');
	}

	function createSidebarMenu() {
		return (
			<div
				className={classes.list}
				role='presentation'
				onClick={event => toggleDrawer(event)}
				onKeyDown={event => toggleDrawer(event)}
			>
				<List>
					{createSidebarMenuItems()}

					<SidebarLine />

					<ListItem
						className={classes.logoutListItem}
						onClick={() => handleLogout()}
					>
						<ListItemIcon className={classes.logoutListItemIcon}>
							<ExitToAppIcon />
						</ListItemIcon>
						<ListItemText className={classes.logoutlistItemText}>
							Log Out
						</ListItemText>
					</ListItem>
				</List>
			</div>
		);
	}

	return (
		<SidebarContentContainer>
			<SidebarContainer key='right'>
				<MenuButton onClick={event => toggleDrawer(event)}>
					Menu
				</MenuButton>

				<SidebarDrawer
					anchor='right'
					open={showMenu}
					onClose={event => toggleDrawer(event)}
				>
					{createSidebarMenu()}
				</SidebarDrawer>
			</SidebarContainer>
		</SidebarContentContainer>
	);
}

export default Sidebar;
