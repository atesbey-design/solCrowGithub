import { useState } from 'react';
import { createCampaign } from '../solana';
const Form = ({ setRoute }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImageLink] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await createCampaign(name, description, image);
    setRoute(0);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <form
        className="ui form"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '0px',
          backgroundColor: 'white',
          width: '400px',
          height: '400px',

          borderRadius: '6px'
        }}
      >
        <h1
          style={{
            color: 'black',
            fontSize: '30px',
            fontWeight: 'bold',

            marginBottom: '30px'
          }}
        >
          Create Campaign
        </h1>
        <div
          className="field"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '0px',
            backgroundColor: 'white',
            width: '240px'
          }}
        >
          <label
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            Proof Link
          </label>
          <input
            type="text"
            name="imageLink"
            placeholder="imageLink"
            onChange={(e) => setImageLink(e.target.value)}
            style={{
              backgroundColor: '#F8F1FF'
            }}
          />
        </div>
        <div
          className="field"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '0px',
            backgroundColor: 'white',
            width: '240px'
          }}
        >
          <label
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => setName(e.target.value)}
            style={{
              backgroundColor: '#F8F1FF'
            }}
          />
        </div>
        <div
          className="field"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '0px',
            backgroundColor: 'white',
            width: '240px'
          }}
        >
          <label
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            style={{
              backgroundColor: '#F8F1FF'
            }}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          className="ui button"
          type="submit"
          onClick={onSubmit}
          style={{
            backgroundColor: '#985ACE',
            color: 'white',
            width: '200px'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
