import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';

import { connect } from 'react-redux';
import { handleChange, register } from '../../store/actions';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  phone: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  formControl: {
    marginTop: '24px'
  },
  phoneNumber: {
    marginLeft: '20px',
    width: '281px',
    marginTop: '34px'
  }
});

function SignupForm(props) {
  const handleChange = e => {
    props.handleChange(e.target.name, e.target.value);
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords don't match");
    }

    const user = ({
      email,
      firstName,
      lastName,
      password,
      countryCode,
      phoneNumber,
      region
    });
console.log(user)
    props.register(user);
    
  };

  const {
    classes,
    firstName,
    lastName,
    email,
    phoneNumber,
    countryCode,
    password,
    confirmPassword,
    regions,
    region
  } = props;

  console.log(props);

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleRegisterSubmit}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='firstname'>First Name</InputLabel>
            <Input
              id='firstName'
              name='firstName'
              autoComplete='firstname'
              autoFocus
              value={firstName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='lastname'>Last Name</InputLabel>
            <Input
              id='lastName'
              name='lastName'
              autoComplete='lastname'
              value={lastName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>Email Address</InputLabel>
            <Input
              id='email'
              name='email'
              autoComplete='email'
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <div className={classes.phone}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor='age-simple'>Country Code</InputLabel>
              <Select
                onChange={handleChange}
                value={countryCode}
                input={<Input name='countryCode' />}
              >
                <MenuItem value='1'>United States</MenuItem>
                <MenuItem value='4'>Afghanistan</MenuItem>
                <MenuItem value='248'>Åland Islands</MenuItem>
                <MenuItem value='8'>Albania</MenuItem>
                <MenuItem value='12'>Algeria</MenuItem>
                <MenuItem value='16'>American Samoa</MenuItem>
                <MenuItem value='20'>Andorra</MenuItem>
                <MenuItem value='24'>Angola</MenuItem>
                <MenuItem value='660'>Anguilla</MenuItem>
                <MenuItem value='10'>Antarctica</MenuItem>
                <MenuItem value='28'>Antigua and Barbuda</MenuItem>
                <MenuItem value='32'>Argentina</MenuItem>
                <MenuItem value='51'>Armenia</MenuItem>
                <MenuItem value='533'>Aruba</MenuItem>
                <MenuItem value='36'>Australia</MenuItem>
                <MenuItem value='40'>Austria</MenuItem>
                <MenuItem value='31'>Azerbaijan</MenuItem>
                <MenuItem value='44'>Bahamas</MenuItem>
                <MenuItem value='48'>Bahrain</MenuItem>
                <MenuItem value='50'>Bangladesh</MenuItem>
                <MenuItem value='52'>Barbados</MenuItem>
                <MenuItem value='112'>Belarus</MenuItem>
                <MenuItem value='56'>Belgium</MenuItem>
                <MenuItem value='84'>Belize</MenuItem>
                <MenuItem value='204'>Benin</MenuItem>
                <MenuItem value='60'>Bermuda</MenuItem>
                <MenuItem value='64'>Bhutan</MenuItem>
                <MenuItem value='68'>Bolivia, Plurinational State of</MenuItem>
                <MenuItem value='535'>
                  Bonaire, Sint Eustatius and Saba
                </MenuItem>
                <MenuItem value='70'>Bosnia and Herzegovina</MenuItem>
                <MenuItem value='72'>Botswana</MenuItem>
                <MenuItem value='74'>Bouvet Island</MenuItem>
                <MenuItem value='76'>Brazil</MenuItem>
                <MenuItem value='86'>British Indian Ocean Territory</MenuItem>
                <MenuItem value='96'>Brunei Darussalam</MenuItem>
                <MenuItem value='100'>Bulgaria</MenuItem>
                <MenuItem value='854'>Burkina Faso</MenuItem>
                <MenuItem value='108'>Burundi</MenuItem>
                <MenuItem value='116'>Cambodia</MenuItem>
                <MenuItem value='120'>Cameroon</MenuItem>
                <MenuItem value='124'>Canada</MenuItem>
                <MenuItem value='132'>Cape Verde</MenuItem>
                <MenuItem value='136'>Cayman Islands</MenuItem>
                <MenuItem value='140'>Central African Republic</MenuItem>
                <MenuItem value='148'>Chad</MenuItem>
                <MenuItem value='152'>Chile</MenuItem>
                <MenuItem value='156'>China</MenuItem>
                <MenuItem value='162'>Christmas Island</MenuItem>
                <MenuItem value='166'>Cocos (Keeling) Islands</MenuItem>
                <MenuItem value='170'>Colombia</MenuItem>
                <MenuItem value='174'>Comoros</MenuItem>
                <MenuItem value='178'>Congo</MenuItem>
                <MenuItem value='180'>
                  Congo, the Democratic Republic of the
                </MenuItem>
                <MenuItem value='184'>Cook Islands</MenuItem>
                <MenuItem value='188'>Costa Rica</MenuItem>
                <MenuItem value='384'>Côte d'Ivoire</MenuItem>
                <MenuItem value='191'>Croatia</MenuItem>
                <MenuItem value='192'>Cuba</MenuItem>
                <MenuItem value='531'>Curaçao</MenuItem>
                <MenuItem value='196'>Cyprus</MenuItem>
                <MenuItem value='203'>Czech Republic</MenuItem>
                <MenuItem value='208'>Denmark</MenuItem>
                <MenuItem value='262'>Djibouti</MenuItem>
                <MenuItem value='212'>Dominica</MenuItem>
                <MenuItem value='214'>Dominican Republic</MenuItem>
                <MenuItem value='218'>Ecuador</MenuItem>
                <MenuItem value='818'>Egypt</MenuItem>
                <MenuItem value='222'>El Salvador</MenuItem>
                <MenuItem value='226'>Equatorial Guinea</MenuItem>
                <MenuItem value='232'>Eritrea</MenuItem>
                <MenuItem value='233'>Estonia</MenuItem>
                <MenuItem value='231'>Ethiopia</MenuItem>
                <MenuItem value='238'>Falkland Islands (Malvinas)</MenuItem>
                <MenuItem value='234'>Faroe Islands</MenuItem>
                <MenuItem value='242'>Fiji</MenuItem>
                <MenuItem value='246'>Finland</MenuItem>
                <MenuItem value='250'>France</MenuItem>
                <MenuItem value='254'>French Guiana</MenuItem>
                <MenuItem value='258'>French Polynesia</MenuItem>
                <MenuItem value='260'>French Southern Territories</MenuItem>
                <MenuItem value='266'>Gabon</MenuItem>
                <MenuItem value='270'>Gambia</MenuItem>
                <MenuItem value='268'>Georgia</MenuItem>
                <MenuItem value='276'>Germany</MenuItem>
                <MenuItem value='288'>Ghana</MenuItem>
                <MenuItem value='292'>Gibraltar</MenuItem>
                <MenuItem value='300'>Greece</MenuItem>
                <MenuItem value='304'>Greenland</MenuItem>
                <MenuItem value='308'>Grenada</MenuItem>
                <MenuItem value='312'>Guadeloupe</MenuItem>
                <MenuItem value='316'>Guam</MenuItem>
                <MenuItem value='320'>Guatemala</MenuItem>
                <MenuItem value='831'>Guernsey</MenuItem>
                <MenuItem value='324'>Guinea</MenuItem>
                <MenuItem value='624'>Guinea-Bissau</MenuItem>
                <MenuItem value='328'>Guyana</MenuItem>
                <MenuItem value='332'>Haiti</MenuItem>
                <MenuItem value='334'>
                  Heard Island and McDonald Islands
                </MenuItem>
                <MenuItem value='336'>Holy See (Vatican City State)</MenuItem>
                <MenuItem value='340'>Honduras</MenuItem>
                <MenuItem value='344'>Hong Kong</MenuItem>
                <MenuItem value='348'>Hungary</MenuItem>
                <MenuItem value='352'>Iceland</MenuItem>
                <MenuItem value='356'>India</MenuItem>
                <MenuItem value='360'>Indonesia</MenuItem>
                <MenuItem value='364'>Iran, Islamic Republic of</MenuItem>
                <MenuItem value='368'>Iraq</MenuItem>
                <MenuItem value='372'>Ireland</MenuItem>
                <MenuItem value='833'>Isle of Man</MenuItem>
                <MenuItem value='376'>Israel</MenuItem>
                <MenuItem value='380'>Italy</MenuItem>
                <MenuItem value='388'>Jamaica</MenuItem>
                <MenuItem value='392'>Japan</MenuItem>
                <MenuItem value='832'>Jersey</MenuItem>
                <MenuItem value='400'>Jordan</MenuItem>
                <MenuItem value='398'>Kazakhstan</MenuItem>
                <MenuItem value='404'>Kenya</MenuItem>
                <MenuItem value='296'>Kiribati</MenuItem>
                <MenuItem value='408'>
                  Korea, Democratic People's Republic of
                </MenuItem>
                <MenuItem value='410'>Korea, Republic of</MenuItem>
                <MenuItem value='414'>Kuwait</MenuItem>
                <MenuItem value='417'>Kyrgyzstan</MenuItem>
                <MenuItem value='418'>
                  Lao People's Democratic Republic
                </MenuItem>
                <MenuItem value='428'>Latvia</MenuItem>
                <MenuItem value='422'>Lebanon</MenuItem>
                <MenuItem value='426'>Lesotho</MenuItem>
                <MenuItem value='430'>Liberia</MenuItem>
                <MenuItem value='434'>Libya</MenuItem>
                <MenuItem value='438'>Liechtenstein</MenuItem>
                <MenuItem value='440'>Lithuania</MenuItem>
                <MenuItem value='442'>Luxembourg</MenuItem>
                <MenuItem value='446'>Macao</MenuItem>
                <MenuItem value='807'>
                  Macedonia, the former Yugoslav Republic of
                </MenuItem>
                <MenuItem value='450'>Madagascar</MenuItem>
                <MenuItem value='454'>Malawi</MenuItem>
                <MenuItem value='458'>Malaysia</MenuItem>
                <MenuItem value='462'>Maldives</MenuItem>
                <MenuItem value='466'>Mali</MenuItem>
                <MenuItem value='470'>Malta</MenuItem>
                <MenuItem value='584'>Marshall Islands</MenuItem>
                <MenuItem value='474'>Martinique</MenuItem>
                <MenuItem value='478'>Mauritania</MenuItem>
                <MenuItem value='480'>Mauritius</MenuItem>
                <MenuItem value='175'>Mayotte</MenuItem>
                <MenuItem value='484'>Mexico</MenuItem>
                <MenuItem value='583'>Micronesia, Federated States of</MenuItem>
                <MenuItem value='498'>Moldova, Republic of</MenuItem>
                <MenuItem value='492'>Monaco</MenuItem>
                <MenuItem value='496'>Mongolia</MenuItem>
                <MenuItem value='499'>Montenegro</MenuItem>
                <MenuItem value='500'>Montserrat</MenuItem>
                <MenuItem value='504'>Morocco</MenuItem>
                <MenuItem value='508'>Mozambique</MenuItem>
                <MenuItem value='104'>Myanmar</MenuItem>
                <MenuItem value='516'>Namibia</MenuItem>
                <MenuItem value='520'>Nauru</MenuItem>
                <MenuItem value='524'>Nepal</MenuItem>
                <MenuItem value='528'>Netherlands</MenuItem>
                <MenuItem value='540'>New Caledonia</MenuItem>
                <MenuItem value='554'>New Zealand</MenuItem>
                <MenuItem value='558'>Nicaragua</MenuItem>
                <MenuItem value='562'>Niger</MenuItem>
                <MenuItem value='566'>Nigeria</MenuItem>
                <MenuItem value='570'>Niue</MenuItem>
                <MenuItem value='574'>Norfolk Island</MenuItem>
                <MenuItem value='580'>Northern Mariana Islands</MenuItem>
                <MenuItem value='578'>Norway</MenuItem>
                <MenuItem value='512'>Oman</MenuItem>
                <MenuItem value='586'>Pakistan</MenuItem>
                <MenuItem value='585'>Palau</MenuItem>
                <MenuItem value='275'>Palestinian Territory, Occupied</MenuItem>
                <MenuItem value='591'>Panama</MenuItem>
                <MenuItem value='598'>Papua New Guinea</MenuItem>
                <MenuItem value='600'>Paraguay</MenuItem>
                <MenuItem value='604'>Peru</MenuItem>
                <MenuItem value='608'>Philippines</MenuItem>
                <MenuItem value='612'>Pitcairn</MenuItem>
                <MenuItem value='616'>Poland</MenuItem>
                <MenuItem value='620'>Portugal</MenuItem>
                <MenuItem value='630'>Puerto Rico</MenuItem>
                <MenuItem value='634'>Qatar</MenuItem>
                <MenuItem value='638'>Réunion</MenuItem>
                <MenuItem value='642'>Romania</MenuItem>
                <MenuItem value='643'>Russian Federation</MenuItem>
                <MenuItem value='646'>Rwanda</MenuItem>
                <MenuItem value='652'>Saint Barthélemy</MenuItem>
                <MenuItem value='654'>
                  Saint Helena, Ascension and Tristan da Cunha
                </MenuItem>
                <MenuItem value='659'>Saint Kitts and Nevis</MenuItem>
                <MenuItem value='662'>Saint Lucia</MenuItem>
                <MenuItem value='663'>Saint Martin (French part)</MenuItem>
                <MenuItem value='666'>Saint Pierre and Miquelon</MenuItem>
                <MenuItem value='670'>
                  Saint Vincent and the Grenadines
                </MenuItem>
                <MenuItem value='882'>Samoa</MenuItem>
                <MenuItem value='674'>San Marino</MenuItem>
                <MenuItem value='678'>Sao Tome and Principe</MenuItem>
                <MenuItem value='682'>Saudi Arabia</MenuItem>
                <MenuItem value='686'>Senegal</MenuItem>
                <MenuItem value='688'>Serbia</MenuItem>
                <MenuItem value='690'>Seychelles</MenuItem>
                <MenuItem value='694'>Sierra Leone</MenuItem>
                <MenuItem value='702'>Singapore</MenuItem>
                <MenuItem value='534'>Sint Maarten (Dutch part)</MenuItem>
                <MenuItem value='703'>Slovakia</MenuItem>
                <MenuItem value='705'>Slovenia</MenuItem>
                <MenuItem value='90'>Solomon Islands</MenuItem>
                <MenuItem value='706'>Somalia</MenuItem>
                <MenuItem value='710'>South Africa</MenuItem>
                <MenuItem value='239'>
                  South Georgia and the South Sandwich Islands
                </MenuItem>
                <MenuItem value='728'>South Sudan</MenuItem>
                <MenuItem value='724'>Spain</MenuItem>
                <MenuItem value='144'>Sri Lanka</MenuItem>
                <MenuItem value='729'>Sudan</MenuItem>
                <MenuItem value='740'>Suriname</MenuItem>
                <MenuItem value='744'>Svalbard and Jan Mayen</MenuItem>
                <MenuItem value='748'>Swaziland</MenuItem>
                <MenuItem value='752'>Sweden</MenuItem>
                <MenuItem value='756'>Switzerland</MenuItem>
                <MenuItem value='760'>Syrian Arab Republic</MenuItem>
                <MenuItem value='158'>Taiwan, Province of China</MenuItem>
                <MenuItem value='762'>Tajikistan</MenuItem>
                <MenuItem value='834'>Tanzania, United Republic of</MenuItem>
                <MenuItem value='764'>Thailand</MenuItem>
                <MenuItem value='626'>Timor-Leste</MenuItem>
                <MenuItem value='768'>Togo</MenuItem>
                <MenuItem value='772'>Tokelau</MenuItem>
                <MenuItem value='776'>Tonga</MenuItem>
                <MenuItem value='780'>Trinidad and Tobago</MenuItem>
                <MenuItem value='788'>Tunisia</MenuItem>
                <MenuItem value='792'>Turkey</MenuItem>
                <MenuItem value='795'>Turkmenistan</MenuItem>
                <MenuItem value='796'>Turks and Caicos Islands</MenuItem>
                <MenuItem value='798'>Tuvalu</MenuItem>
                <MenuItem value='800'>Uganda</MenuItem>
                <MenuItem value='804'>Ukraine</MenuItem>
                <MenuItem value='784'>United Arab Emirates</MenuItem>
                <MenuItem value='826'>United Kingdom</MenuItem>
                <MenuItem value='840'>United States</MenuItem>
                <MenuItem value='581'>
                  United States Minor Outlying Islands
                </MenuItem>
                <MenuItem value='858'>Uruguay</MenuItem>
                <MenuItem value='860'>Uzbekistan</MenuItem>
                <MenuItem value='548'>Vanuatu</MenuItem>
                <MenuItem value='862'>
                  Venezuela, Bolivarian Republic of
                </MenuItem>
                <MenuItem value='704'>Viet Nam</MenuItem>
                <MenuItem value='92'>Virgin Islands, British</MenuItem>
                <MenuItem value='850'>Virgin Islands, U.S.</MenuItem>
                <MenuItem value='876'>Wallis and Futuna</MenuItem>
                <MenuItem value='732'>Western Sahara</MenuItem>
                <MenuItem value='887'>Yemen</MenuItem>
                <MenuItem value='894'>Zambia</MenuItem>
                <MenuItem value='716'>Zimbabwe</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              margin='normal'
              required
              className={classes.phoneNumber}
            >
              <InputLabel htmlFor='phone'> Phone Number</InputLabel>
              <Input
                type='tel'
                id='phone'
                name='phoneNumber'
                autoComplete='phone'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                required
                placeholder='123-456-7890'
                value={phoneNumber}
                onChange={handleChange}
              />
            </FormControl>
          </div>

          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor='age-simple'>Region</InputLabel>
            <Select
              onChange={handleChange}
              value={region}
              input={<Input name='region' id='name-disabled' />}
            >
              {regions.map(region => (
                <MenuItem value={region.id} key={region.id}>
                  {region.region}{' '}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              name='password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='confirmPassword'>Confirm Password</InputLabel>
            <Input
              name='confirmPassword'
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </main>
  );
}

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  countryCode: PropTypes.string
};

const mapStateToProps = state => ({
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
  email: state.auth.email,
  phoneNumber: state.auth.phoneNumber,
  password: state.auth.password,
  confirmPassword: state.auth.confirmPassword,
  loginEmail: state.auth.loginEmail,
  loginPassword: state.auth.loginPassword,
  countryCode: state.auth.countryCode,
  regions: state.auth.regions,
  region: state.auth.region
});

export default connect(
  mapStateToProps,
  { handleChange, register }
)(withStyles(styles)(SignupForm));
