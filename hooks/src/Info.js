import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(()=>{
    console.log('effect');
    // console.log(name);
    return () => {
      console.log('cleanup');
      // console.log(name);
    };
  }, []);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangenickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangenickname} />
      </div>
      <div>
        <div>
          <b>이름</b> {name}
        </div>
        <div>
          <b>닉네임</b> {nickname}
        </div>
      </div>
    </div>
    
  )
}

export default Info;