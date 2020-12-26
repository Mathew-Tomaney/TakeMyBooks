import MyBookContainer from './MyBookContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUsers, getUsersById } from '../fetches/UserFetch';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import NewUserBox from './pages/NewUserBox';
import FindBooksPage from './pages/FindBooksPage';
import AddBook from '../components/addBookPage/AddBook';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AppContainer.css';
import MyRequestsPage from '../containers/pages/MyRequestsPage';
import BookDetail from '../containers/pages/BookDetail';

const AppContainer = () => {
	const [currentUser, setCurrentUser] = useState({});

	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers().then((data) => setUsers(data));
	}, []);

	return (
		<Router>
			<Header currentUser={currentUser} />
			<main className="main-content">
				<Switch>
					<Route exact path="/" component={Home} />

					<Route
						path="/login"
						exact
						render={() => (
							<NewUserBox setCurrentUser={setCurrentUser} />
						)}
					/>

					<Route
						exact
						path="/find-books"
						render={() => (
							<FindBooksPage
								users={users}
								currentUser={currentUser}
							></FindBooksPage>
						)}
					/>

					<Route
						exact
						path="/my-books"
						render={() => (
							<MyBookContainer currentUser={currentUser}/>
						)}
					/>

					<Route
						path="/my-books/add-book"
						exact
						render={() => <AddBook currentUser={currentUser} setCurrentUser={setCurrentUser} />}
					/>
					<Route
						path="/my-requests"
						exact
						render={() => (
							<MyRequestsPage currentUser={currentUser} />
						)}
					/>
					{/* <Route
						path="/book-detail"
						exact
						render={() => <BookDetail currentUser={currentUser} />}
					/> */}
					{/* <Route component={ErrorPage}/> */}
				</Switch>
			</main>
			<Footer />
		</Router>
	);
};

export default AppContainer;
