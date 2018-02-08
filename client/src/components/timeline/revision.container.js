import { connect } from 'react-redux';
import * as WikiSelectors from 'app/selectors/wiki';
import * as RevisionActions from 'app/actions/revisions';
import makeGetSide from 'app/selectors/side';
import Revision from './revision';

const getSide = makeGetSide();

export default connect(
	( state, ownProps ) => ( {
		wiki: WikiSelectors.getWiki( state ),
		side: getSide( state, ownProps )
	} ),
	dispatch => ( {
		toggleDiff: revision => dispatch( RevisionActions.toggleDiff( revision ) )
	} ),
)( Revision );
