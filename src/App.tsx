import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { getUser } from './features/auth/authSlice';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { selectAuthChecked } from './features/auth/selectors';
import Layout from './components/layouts/Layout';

import Confirmation from './features/auth/Confirmation';
import AnswerList from './features/answers/AnswerList';
import AboutUs from './components/footer/aboutUs/AboutUs';
import Support from './components/footer/support/Support';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import TermOfUse from './components/footer/terms/TermOfUse';
import Policy from './components/footer/policy/Policy';
import TestList from './components/user_tests/TestList';
import AdminCabinet from './components/main/AdminCabinet';
import Questions from './features/questions/Questions';
import CreateTestForm from './features/tests/CreateTestForm';
import Home from './components/Home/Home';
import TestBE from './components/user_tests/TestBE';
import TestQA from './components/user_tests/TestQA';
import TestFE from './components/user_tests/TestFE';
import FAQ from './components/footer/faq/FAQ';
import More from './components/user_tests/More';

function App(): JSX.Element {
	const dispatch = useAppDispatch();
	const authChecked = useAppSelector(selectAuthChecked);

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	if (!authChecked) {
		return (
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		);
	}

	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					{/* NavBar */}
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/register" element={<Register />} />
					<Route path="/confirm" element={<Confirmation />} />
					{/* user */}
					<Route path="/user" element={<TestList />} />
					<Route path="/testBE" element={<TestBE />} />
					<Route path="/testFE" element={<TestFE />} />
					<Route path="/testQA" element={<TestQA />} />
					<Route path="/more-info" element={<More />} />
					{/* admin */}
					<Route path="/admin_test" element={<AdminCabinet />} />
					<Route path="/admin/questions" element={<Questions />} />
					<Route path="/admin/answers" element={<AnswerList />} />
					<Route path="/admin/tests" element={<CreateTestForm />} />
					{/* Footer */}
					<Route path="/policy" element={<Policy />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/support" element={<Support />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/termOfUse" element={<TermOfUse />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
