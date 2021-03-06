import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { fade } from '@material-ui/core/styles/colorManipulator'
import amber from '@material-ui/core/colors/amber'

const styles = theme => ({
    footerText: {
        color: amber[500]
    },
    footer: {
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 2}px 0`,
        backgroundColor: 'rgba(10,31,60,1)',
    },
})

function Footer(props) {
    const { classes } = props;

    return (
        <Fragment>
                <CssBaseline />
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" className={classes.footerText} gutterBottom>
                        Discover Indie GIGS
                    </Typography>
                </footer>
        </Fragment>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);