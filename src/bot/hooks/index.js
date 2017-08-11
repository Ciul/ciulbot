import applyResolvers from '../../utils/applyresolvers'

import message from './message'
import subscribe from './subscribe'

export default (data) => {
    return applyResolvers(subscribe, message)(data)()
}