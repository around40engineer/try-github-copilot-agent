import {render, screen} from '@testing-library/react';
import {describe, expect, it, vi, afterEach} from 'vitest';
import App from '../App.tsx';
import {getMemos, saveMemo} from '../repositories/MemoRepository.ts';
import {userEvent} from '@testing-library/user-event';

vi.mock('../repositories/MemoRepository.ts')

describe('App', () => {
    afterEach(() => {
        vi.mocked(saveMemo).mockClear()
        vi.mocked(getMemos).mockClear()
    })
    it('レンダーされたら各種要素が表示される', async() => {
        vi.mocked(getMemos).mockResolvedValue({memos: []})
        render(<App />)

        expect(await screen.findByRole('heading',{name:'memo app example'})).toBeInTheDocument()
        expect(await screen.findByPlaceholderText('メモを入力')).toBeInTheDocument()
        expect(await screen.findByLabelText('日付')).toBeInTheDocument() // date input field
        expect(await screen.findByRole('button',{name:'save'})).toBeInTheDocument()
    })
    it('レンダーされたらgetMemosを呼び、返り値を表示する', async () => {
        vi.mocked(getMemos).mockResolvedValue({memos: ['test1','test2']})
        render(<App />)

        expect(getMemos).toHaveBeenCalled()
        expect(await screen.findByText('test1')).toBeInTheDocument()
        expect(await screen.findByText('test2')).toBeInTheDocument()
    })
    it('メモを入力してsaveボタンを押したら、saveMemoを呼ぶ', async () => {
        vi.mocked(getMemos).mockResolvedValue({memos: []})
        render(<App />)

        await userEvent.type(screen.getByRole('textbox'), 'hogehoge')
        await userEvent.click(screen.getByRole('button', {name: 'save'}))

        expect(saveMemo).toHaveBeenCalledWith('hogehoge')
    })
    it('メモを入力してsaveボタンを押したら、getMemoを呼び、返り値を表示する', async () => {
        vi.mocked(getMemos)
            .mockResolvedValueOnce({memos: []})
            .mockResolvedValueOnce({memos: ['test1']})

        render(<App />)

        await userEvent.type(screen.getByRole('textbox'), 'hogehoge')
        await userEvent.click(screen.getByRole('button', {name: 'save'}))

        expect(getMemos).toHaveBeenCalledTimes(2)
        expect(await screen.findByText('test1')).toBeInTheDocument()
    })
    it('日付入力欄が表示される', async () => {
        vi.mocked(getMemos).mockResolvedValue({memos: []})
        render(<App />)

        const dateInput = await screen.findByLabelText('日付')
        expect(dateInput).toHaveAttribute('type', 'date')
    })
    it('日付入力欄に値を入力できる', async () => {
        vi.mocked(getMemos).mockResolvedValue({memos: []})
        render(<App />)

        const dateInput = screen.getByLabelText('日付')
        await userEvent.type(dateInput, '2024-01-15')
        
        expect(dateInput).toHaveValue('2024-01-15')
    })
    it('「開始時刻」テキストとテキストボックスが表示される', async () => {
        vi.mocked(getMemos).mockResolvedValue({ memos: [] });
        render(<App />);
        expect(await screen.findByText('開始時刻')).toBeInTheDocument();
        const timeInput = screen.getByLabelText('開始時刻');
        expect(timeInput).toBeInTheDocument();
        expect(timeInput).toHaveAttribute('type', 'time');
    });

    it('開始時刻テキストボックスの時計アイコンをクリックすると時間選択ができる', async () => {
        vi.mocked(getMemos).mockResolvedValue({ memos: [] });
        render(<App />);
        const timeInput = screen.getByLabelText('開始時刻');
        await userEvent.click(timeInput);
        await userEvent.type(timeInput, '13:45');
        expect(timeInput).toHaveValue('13:45');
    });

    it('開始時刻テキストボックスは24時間表記・1分単位で選択できる', async () => {
        vi.mocked(getMemos).mockResolvedValue({ memos: [] });
        render(<App />);
        const timeInput = screen.getByLabelText('開始時刻');
        await userEvent.clear(timeInput);
        await userEvent.type(timeInput, '23:59');
        expect(timeInput).toHaveValue('23:59');
    });
})
