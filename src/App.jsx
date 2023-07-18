import { Button, Card, Checkbox, Col, Layout, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useState } from 'react';
import Styles from './App.module.css';
import data from './data.json';

const headerStyle = {
    textAlign: 'center',
    fontSize: '1.8rem',
    height: '64px',
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'transparent',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: '80vh',
    lineHeight: '120px',
    color: '#fff',
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    padding: '10px',
    backgroundColor: 'transparent',
};
const footerStyle = {
    textAlign: 'center',
    height: '64px',
};

function App() {
    const [topics, setTopics] = useState([]);
    const [writers, setWriters] = useState([]);

    const handleSelect = (item, setter) => {
        setter((prevState) => {
            const targetedItem = prevState?.find((currentItem) => currentItem?.id === item?.id);
            if (targetedItem) {
                const newState = prevState.filter(
                    (currentItem) => currentItem?.id !== targetedItem?.id
                );
                return newState;
            }
            const newState = [...prevState, item];
            return newState;
        });
    };

    const filterByTopics = (item) => {
        if (topics?.length > 0) {
            return topics.some((topic) => topic?.name === item?.topics);
        }
        return true;
    };
    const filterByWriters = (item) => {
        if (writers?.length > 0) {
            return writers?.some((writer) => writer?.name === item?.author);
        }
        return true;
    };

    const filteredBooks = data?.books?.filter(filterByTopics)?.filter(filterByWriters);

    return (
        <Layout>
            <Sider style={siderStyle} width={250}>
                <Card
                    size="small"
                    title="Topics"
                    style={{
                        width: '100%',
                        textAlign: 'left',
                        display: 'inline-block',
                    }}
                    bodyStyle={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {data?.topics?.map((item) => (
                        <Checkbox key={item?.id} onChange={() => handleSelect(item, setTopics)}>
                            <p>{item?.name}</p>
                        </Checkbox>
                    ))}
                </Card>
                <Card
                    size="small"
                    title="writer"
                    style={{
                        width: '100%',
                        textAlign: 'left',
                        display: 'inline-block',
                    }}
                    bodyStyle={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {data?.writer?.map((item) => (
                        <Checkbox key={item?.id} onChange={() => handleSelect(item, setWriters)}>
                            <p>{item?.name}</p>
                        </Checkbox>
                    ))}
                </Card>
            </Sider>
            <Layout>
                <Header style={headerStyle}>Book List</Header>
                <Content style={contentStyle}>
                    <Row gutter={[15, 15]} style={{ marginLeft: 0, marginRight: 0 }}>
                        {filteredBooks?.map((item) => (
                            <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={4} key={item?.id}>
                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                    }}
                                    bodyStyle={{
                                        padding: '10px 0 ',
                                    }}
                                    cover={
                                        <img
                                            alt="example"
                                            src={item?.coverImage}
                                            className={Styles.bookCoverImage}
                                        />
                                    }
                                >
                                    <Meta title={item?.title} description={item?.author} />
                                    <div>
                                        <p>{item?.price} BDT</p>
                                        <Button type="primary">Add To Cart</Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Content>
                <Footer style={footerStyle}>©2023 The Obaidul</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
