import React from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getInstanceATK } from '@api/axios';
import {
  commentIdState,
  commentInputButtonState,
  commentInputFocusState,
  commentRequestState,
  commentTextState,
} from '@recoil/CommunityStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CommentInputStyle as styles } from './styles';

export default function CommentsInput({ id }: { id: number }) {
  const postId = id; // 댓글 추가시 게시물 아이디

  const [comment, setComment] = useRecoilState(commentTextState);
  const setRequestSuccess = useSetRecoilState(commentRequestState);

  const isFocus = useRecoilValue(commentInputFocusState);
  const commentId = useRecoilValue(commentIdState); // 수정 요청시 댓글 아이디
  const [editButton, setEditButton] = useRecoilState(commentInputButtonState);

  // 댓글 추가
  const addComment = async () => {
    const instanceAtk = await getInstanceATK();
    try {
      const data = await instanceAtk.post(
        `/community/comment/post/${postId}`,
        comment,
      );
      setRequestSuccess(true);
      setComment({ content: '' });
    } catch (e) {
      console.log(e);
    }
  };

  // 댓글 수정
  const editComment = async () => {
    const instanceAtk = await getInstanceATK();
    try {
      const data = await instanceAtk.put(
        `/community/comment/${commentId}`,
        comment,
      );
      // console.log(data)
      setRequestSuccess(true);
      setComment({ content: '' });
      setEditButton(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingStyle}>
      <TextInput
        placeholder={'댓글을 입력하세요'}
        style={styles.commentInputBox}
        onChangeText={text => setComment({ content: text })}
        multiline
        value={comment.content}
        autoFocus={isFocus}
      />
      {editButton ? (
        <TouchableOpacity
          onPress={comment.content.length > 3 ? editComment : () => {}}
        >
          <Text
            style={
              comment.content.length > 3 ? styles.activeEditBtn : styles.editBtn
            }
          >
            수정완료
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={addComment} style={{ zIndex: 1000 }}>
          <AntDesign
            name="arrowright"
            style={comment.content ? styles.activeArrowIcon : styles.arrowIcon}
          />
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
}
