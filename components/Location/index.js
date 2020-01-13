import React, {useEffect, forwardRef, useState} from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Location = props => {
	let attrTemp = {}
	const apiProps = [
		'metro',
		'lang',
		'from',
		'to'
	]
	const [attr, setAttr] = useState()

	useEffect(() => {
		if(!document.querySelector('#moovit-jsw')){
      (function(d, s, id, props) {
        var js, fjs = d.getElementsByTagName(s)[0];

        js = d.createElement(s); js.id = id;

        js.src = `https://widgets.moovit.com/wtp/${props.lang ? props.lang : 'en'}`;

        fjs.parentNode.insertBefore(js, fjs);

      })(document, 'script', 'moovit-jsw', props)
		}
		
		Object.entries(props).forEach(([key, value]) => {
			if(apiProps.includes(key)){
        attrTemp[`data-${key}`] = value
      }else if(key == 'fromCoords'){
        attrTemp['data-from-lat-long'] = `${value[0]}_${value[1]}`
      }else if(key == 'toCoords'){
        attrTemp['data-to-lat-long'] = `${value[0]}_${value[1]}`
      }

			setAttr(attrTemp)
		})
	}, [])

	return (
		<div className="mv-wtp" {...attr} ref={props.forwardedRef}></div>
	)
}

Location.propTypes = {
	metro: PropTypes.number,
  lang: PropTypes.string,
  from: PropTypes.string,
  fromCoords: PropTypes.arrayOf(PropTypes.number),
  to: PropTypes.string,
  toCoords: PropTypes.arrayOf(PropTypes.number)
}

export default forwardRef((props, ref) => <Location {...props} forwardedRef={ref} />)
