import {render, screen} from '@testing-library/react';
import {describe, expect, it, vi, afterEach} from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App.tsx';
import {getMemos, saveMemo} from '../repositories/MemoRepository.ts';

vi.mock('../repositories/MemoRepository.ts')

describe('Date Input Feature', () => {
    afterEach(() => {
        vi.mocked(saveMemo).mockClear()
        vi.mocked(getMemos).mockClear()
    })

    it('RAKUDAを開いている場合、"日付"というテキストが見える', async () => {
        vi.mocked(getMemos).mockResolvedValue({memos: []})
        render(<App />)
        
        expect(await screen.findByText('日付')).toBeInTheDocument()
    })

    it('"日付"テキストの下に日付を選択できるテキストボックスが見える', async () => {
        vi.mocked(getMemos).mockResolvedValue({memos: []})
        render(<App />)
        
        const dateInput = screen.getByLabelText('日付')
        expect(dateInput).toBeInTheDocument()
        expect(dateInput).toHaveAttribute('type', 'date')
    })

    it('テキストボックスに日付を入力することができる', async () => {
        const user = userEvent.setup()
        vi.mocked(getMemos).mockResolvedValue({memos: []})
        render(<App />)
        
        const dateInput = screen.getByLabelText('日付')
        await user.type(dateInput, '2024-01-15')
        
        expect(dateInput).toHaveValue('2024-01-15')
    })
})