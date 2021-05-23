import React, { useState, useEffect } from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import { Text } from 'react-native-animatable';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function Password({onPress}: {onPress: ()=> void}) {
  // 비밀번호 text 보이는것 조정 함수
  const [isShow, setIsShow]= useState(false)
  const updateSecureTextEntry = () => { setIsShow(!isShow) }

  // 패스워드 입력 함수 (이름에 따라 패스워드를 받기)
  let [password, setPassword] = useState<string>('')
  const [rePassword, setRePassword ]= useState<string>('')
  const [isValid,setIsValid]=useState(false)
  const [isMatch, setIsMatch] = useState<boolean>(false)  
  
  useEffect(
      ()=>{ 
        validation()
      },[password, rePassword]
    )
  
  // 유효성 검사 함수
  const validation =() => {
    const passwordReg =  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    const hasEveryCharacter = passwordReg.test(password);
    const isLongerThanTen = password.length >=10? true: false;

    if (password) {
      if (hasEveryCharacter && isLongerThanTen) {setIsValid(true)}
      else {setIsValid(false), setIsMatch(false)}
    }
    if (!password || !rePassword || password !== rePassword) {setIsMatch(false)}
   else {setIsMatch(true)}
  };

  return (
    <>
        <View style={styles.contentContainer}>
          <View style={styles.inputBox}>
            <TextInput 
              style={styles.passwordInput} 
              placeholder="비밀번호" 
              placeholderTextColor="#D8D8D8" 
              autoCapitalize="none" 
              keyboardAppearance="default"
              secureTextEntry={isShow} 
              onChangeText= {(value: string)=> setPassword(value)}
              />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {isShow
              ? <Feather name='eye-off' size={24} style={isValid?   styles.validPwIcon : styles.visiblePw} /> 
              : <Feather name='eye' size={24} style={isValid? styles.validPwIcon : styles.invisiblePw}/>
              } 
            </TouchableOpacity>
          </View>
            {password !== undefined && (
              <Text style={isValid? styles.validMessage: styles.invalidMessage}>
                  {isValid
                  ? "올바른 형태의 비밀번호 입니다."
                  : "10~16자 영문과 숫자를 조합해주세요."}
              </Text>
              )}

          <View style={styles.inputBox}>
            <TextInput 
              style={styles.passwordInput} 
              placeholder="비밀번호 확인"  
              placeholderTextColor="#D8D8D8" 
              autoCapitalize="none" 
              secureTextEntry={isShow}
             onChangeText= {(value:string)=> setRePassword( value)}
              />
           <TouchableOpacity onPress={updateSecureTextEntry}>
              {isShow
              ? <Feather name='eye-off' size={24} style={isMatch?   styles.validPwIcon : styles.visiblePw} /> 
              : <Feather name='eye' size={24} style={isMatch? styles.validPwIcon : styles.invisiblePw}/>
              } 
            </TouchableOpacity>
          </View>
            {rePassword !== undefined && (
                <Text style={isMatch? styles.validMessage: styles.invalidMessage} >
                  {isMatch
                    ?"위의 비밀번호와 일치합니다."
                    : "위의 비밀번호와 일치하지 않습니다."}
                </Text>  
              )}  
      </View>
          <TouchableOpacity style={styles.nextBtn} onPress={onPress}>
             <Text style={styles.btnText}>다음</Text>
          </TouchableOpacity> 
    </>
  );
}